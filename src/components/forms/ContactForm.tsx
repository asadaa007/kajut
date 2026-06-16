import { useState, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { FormField, FormTextarea } from '@/components/ui/FormField'
import { Button } from '@/components/ui/Button'
import { MotionReveal } from '@/components/ui/MotionReveal'

export function ContactForm() {
  const { t } = useTranslation()
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const newErrors: Record<string, string> = {}

    if (!form.get('name')) newErrors.name = t('contactPage.form.errors.name')
    const email = form.get('email') as string
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = t('contactPage.form.errors.email')
    }
    if (!form.get('message')) newErrors.message = t('contactPage.form.errors.message')

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
          {t('contactPage.form.success')}
        </p>
      </div>
    )
  }

  return (
    <MotionReveal>
      <form
        onSubmit={handleSubmit}
        className="space-y-5 rounded-[var(--radius-lg)] border border-linen bg-warm-white p-6 md:p-8"
        noValidate
      >
        <h2 className="font-display text-2xl font-semibold text-charcoal">
          {t('contactPage.form.title')}
        </h2>

        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            name="name"
            label={t('contactPage.form.name')}
            error={errors.name}
            required
          />
          <FormField
            name="email"
            type="email"
            label={t('contactPage.form.email')}
            error={errors.email}
            required
          />
        </div>
        <FormField name="phone" type="tel" label={t('contactPage.form.phone')} />
        <FormTextarea
          name="message"
          label={t('contactPage.form.message')}
          error={errors.message}
          required
        />

        <Button type="submit" size="lg">
          {t('contactPage.form.submit')}
        </Button>
      </form>
    </MotionReveal>
  )
}
