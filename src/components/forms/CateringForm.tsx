import { useState, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { FormField, FormTextarea, FormSelect } from '@/components/ui/FormField'
import { Button } from '@/components/ui/Button'
import { MotionReveal } from '@/components/ui/MotionReveal'

export function CateringForm() {
  const { t } = useTranslation()
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const guestOptions = [
    { value: '10-20', label: t('cateringPage.form.guestOptions.10-20') },
    { value: '20-50', label: t('cateringPage.form.guestOptions.20-50') },
    { value: '50+', label: t('cateringPage.form.guestOptions.50+') },
  ]

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const newErrors: Record<string, string> = {}

    if (!form.get('name')) newErrors.name = t('cateringPage.form.errors.name')
    if (!form.get('phone')) newErrors.phone = t('cateringPage.form.errors.phone')
    if (!form.get('date')) newErrors.date = t('cateringPage.form.errors.date')
    if (!form.get('guests')) newErrors.guests = t('cateringPage.form.errors.guests')

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div
        className="rounded-[var(--radius-lg)] bg-gold-wash p-8 text-center"
        role="status"
      >
        <p className="font-display text-xl font-semibold text-charcoal">
          {t('cateringPage.form.success')}
        </p>
      </div>
    )
  }

  return (
    <MotionReveal>
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-lg space-y-5 rounded-[var(--radius-lg)] border border-linen bg-warm-white p-6 md:p-8"
        noValidate
      >
        <div>
          <h2 className="font-display text-2xl font-semibold text-charcoal">
            {t('cateringPage.form.title')}
          </h2>
          <p className="mt-1 text-sm text-stone">{t('cateringPage.form.subtitle')}</p>
        </div>

        <FormField
          name="name"
          label={t('cateringPage.form.name')}
          error={errors.name}
          required
        />
        <FormField
          name="phone"
          type="tel"
          label={t('cateringPage.form.phone')}
          error={errors.phone}
          required
        />
        <FormField
          name="date"
          type="date"
          label={t('cateringPage.form.date')}
          error={errors.date}
          required
        />
        <FormSelect
          name="guests"
          label={t('cateringPage.form.guests')}
          options={guestOptions}
          error={errors.guests}
          required
        />
        <FormTextarea name="message" label={t('cateringPage.form.message')} />

        <Button type="submit" size="lg" className="w-full">
          {t('cateringPage.form.submit')}
        </Button>
      </form>
    </MotionReveal>
  )
}
