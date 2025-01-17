/* eslint-disable react-hooks/exhaustive-deps */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { useHostedSession } from '../src/hooks/useHostedSession'
import {
  ActivityContainer,
  LoadingPage,
  ErrorPage,
  CloseHostedSessionModal,
} from '../src/components'
import { ThemeProvider, HostedPageLayout } from '@awell_health/ui-library'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import awell_logo from '../src/assets/logo.svg'
import { ReactElement, useEffect, useState } from 'react'
import { HostedSessionStatus } from '../src/types/generated/types-orchestration'
import { defaultTo, isNil } from 'lodash'
import { useSessionStorage } from '../src/hooks/useSessionStorage'
import Head from 'next/head'
import { addSentryBreadcrumb } from '../src/services/ErrorReporter'
import { BreadcrumbCategory } from '../src/services/ErrorReporter/addSentryBreadcrumb'
import { NextPageWithLayout } from './_app'
import { HostedSessionLayout } from '../src/layouts'
import { SuccessPage } from '../src/components/SuccessPage'
import { CancelPage } from '../src/components/CancelPage'
import { AWELL_BRAND_COLOR } from '../src/config'

const Home: NextPageWithLayout = () => {
  const { t } = useTranslation()
  const { loading, session, branding, error, refetch } = useHostedSession()
  const { removeItem: removeAccessToken } = useSessionStorage('accessToken', '')
  const router = useRouter()

  const [isCloseHostedSessionModalOpen, setisCloseHostedSessionModalOpen] =
    useState(false)

  const redirectAfterSession = (url: string) => {
    // adding 2 second delay so users are aware of the redirection and we don't change the page abruptly
    setTimeout(() => {
      router.push(url)
      removeAccessToken()
    }, 2000)
  }

  const onOpenCloseHostedSessionModal = () => {
    setisCloseHostedSessionModalOpen(true)
  }

  const onCloseHostedSessionModal = () => {
    setisCloseHostedSessionModalOpen(false)
  }

  const onCloseHostedSession = () => {
    addSentryBreadcrumb({
      category: BreadcrumbCategory.SESSION_CANCEL,
      data: session,
    })
    router.push(session?.cancel_url || 'https://awell.health')
  }

  const shouldRedirect =
    (session?.status === HostedSessionStatus.Completed &&
      !isNil(session?.success_url)) ||
    (session?.status === HostedSessionStatus.Expired &&
      !isNil(session?.cancel_url))

  useEffect(() => {
    if (isNil(session?.status) || typeof window === 'undefined') {
      return
    }

    switch (session?.status) {
      case HostedSessionStatus.Completed:
        addSentryBreadcrumb({
          category: BreadcrumbCategory.SESSION_COMPLETE,
          data: session,
        })
        if (shouldRedirect) {
          redirectAfterSession(session.success_url as string)
        }
        return
      case HostedSessionStatus.Expired:
        addSentryBreadcrumb({
          category: BreadcrumbCategory.SESSION_EXPIRE,
          data: session,
        })
        if (shouldRedirect) {
          redirectAfterSession(session.cancel_url as string)
        }
        return
      default:
        return
    }
  }, [session])

  if (loading) {
    return (
      <>
        <Head>
          <title>{t('seo.loading_title')}</title>
          <meta
            property="og:title"
            content={t('seo.loading_title')}
            key="title"
          />
        </Head>
      </>
    )
  }

  if (session && session?.status !== HostedSessionStatus.Active) {
    return (
      <ThemeProvider accentColor={branding?.accent_color || undefined}>
        <HostedPageLayout
          logo={defaultTo(branding?.logo_url, awell_logo)}
          onCloseHostedPage={onOpenCloseHostedSessionModal}
        >
          {/* Show static success page if success URL is not available */}
          {shouldRedirect === false &&
            session.status === HostedSessionStatus.Completed && <SuccessPage />}

          {/* Show static cancel page if cancel URL is not available */}
          {shouldRedirect === false &&
            session.status === HostedSessionStatus.Expired && <CancelPage />}

          {/* Show 'redirecting' page if URL is available */}
          {shouldRedirect && (
            <LoadingPage title={t('session.redirecting_to_next_page')} />
          )}
        </HostedPageLayout>
      </ThemeProvider>
    )
  }

  return (
    <>
      <Head>
        <title>{defaultTo(branding?.hosted_page_title, t('seo.title'))}</title>
        <meta property="og:title" content={t('seo.title')} key="title" />
        <meta name="description" content={t('seo.description')} />
      </Head>
      <ThemeProvider accentColor={branding?.accent_color || AWELL_BRAND_COLOR}>
        <HostedPageLayout
          logo={defaultTo(branding?.logo_url, awell_logo)}
          onCloseHostedPage={onOpenCloseHostedSessionModal}
        >
          {error && (
            <ErrorPage title={t('session.loading_error')} onRetry={refetch} />
          )}
          {session && <ActivityContainer pathwayId={session.pathway_id} />}
          <ToastContainer
            position="bottom-right"
            newestOnTop
            closeOnClick
            pauseOnFocusLoss
            autoClose={12000}
            hideProgressBar
            draggable
          />
          <CloseHostedSessionModal
            isModalOpen={isCloseHostedSessionModalOpen}
            onCloseHostedSession={onCloseHostedSession}
            onCloseModal={onCloseHostedSessionModal}
          />
        </HostedPageLayout>
      </ThemeProvider>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <HostedSessionLayout>{page}</HostedSessionLayout>
}

export default Home

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
