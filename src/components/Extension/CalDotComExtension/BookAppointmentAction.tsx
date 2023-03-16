import React, { FC, useCallback, useMemo } from 'react'
import { useTranslation } from 'next-i18next'
import { CalDotComScheduling } from '@awell_health/ui-library'
import { mapActionFieldsToObject } from '../utils'

import { BookAppointmentFields } from './types'
import type { ExtensionActivityRecord } from '../../../types/generated/types-orchestration'
import type { BookingSuccessfulFunction } from '@awell_health/ui-library/dist/types/atoms/scheduling/cal.com/calDotComTypes'

interface BookAppointmentActionProps {
  activityDetails: ExtensionActivityRecord
}

export const BookAppointmentAction: FC<BookAppointmentActionProps> = ({
  activityDetails,
}) => {
  const { t } = useTranslation()
  const { fields } = activityDetails

  const { calLink } = useMemo(
    () => mapActionFieldsToObject<BookAppointmentFields>(fields),
    [fields]
  )

  const onBookingSuccessful: BookingSuccessfulFunction = useCallback((data) => {
    // TODO: update activity here
    console.log(data)
  }, [])

  return (
    <CalDotComScheduling
      calLink={calLink}
      onBookingSuccessful={onBookingSuccessful}
    />
  )
}

BookAppointmentAction.displayName = 'BookAppointmentAction'
