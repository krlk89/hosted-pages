import { useState } from 'react'
import type { Activity } from './types'
import { useSubmitChecklistMutation } from './types'

interface UseChecklistHook {
  onSubmit: () => Promise<void>
  isSubmitting: boolean
}

export const useSubmitChecklist = ({
  activity,
}: {
  activity: Activity
}): UseChecklistHook => {
  const { id: activity_id } = activity

  const [submitChecklist] = useSubmitChecklistMutation()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async () => {
    setIsSubmitting(true)
    try {
      await submitChecklist({
        variables: {
          input: {
            activity_id,
          },
        },
      })
    } catch (error) {
      setIsSubmitting(false)
      console.error(error)
    }
  }

  return {
    onSubmit,
    isSubmitting,
  }
}