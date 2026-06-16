import { type InputHTMLAttributes, type TextareaHTMLAttributes, useId } from 'react'
import { cn } from '@/lib/utils'

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export function FormField({ label, error, className, id, ...props }: FormFieldProps) {
  const autoId = useId()
  const fieldId = id ?? autoId
  const errorId = `${fieldId}-error`

  return (
    <div className="space-y-2">
      <label htmlFor={fieldId} className="block text-sm font-medium text-charcoal">
        {label}
      </label>
      <input
        id={fieldId}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          'h-12 w-full rounded-[var(--radius-sm)] border border-linen bg-warm-white px-4 text-charcoal transition-colors placeholder:text-ash focus:border-paprika-700 focus:outline-none focus:ring-2 focus:ring-paprika-700/20',
          error && 'border-error',
          className,
        )}
        {...props}
      />
      {error && (
        <p id={errorId} className="text-sm text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
}

export function FormTextarea({ label, error, className, id, ...props }: FormTextareaProps) {
  const autoId = useId()
  const fieldId = id ?? autoId
  const errorId = `${fieldId}-error`

  return (
    <div className="space-y-2">
      <label htmlFor={fieldId} className="block text-sm font-medium text-charcoal">
        {label}
      </label>
      <textarea
        id={fieldId}
        rows={4}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          'w-full rounded-[var(--radius-sm)] border border-linen bg-warm-white px-4 py-3 text-charcoal transition-colors placeholder:text-ash focus:border-paprika-700 focus:outline-none focus:ring-2 focus:ring-paprika-700/20',
          error && 'border-error',
          className,
        )}
        {...props}
      />
      {error && (
        <p id={errorId} className="text-sm text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

interface FormSelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  label: string
  error?: string
  options: { value: string; label: string }[]
}

export function FormSelect({ label, error, options, className, id, ...props }: FormSelectProps) {
  const autoId = useId()
  const fieldId = id ?? autoId
  const errorId = `${fieldId}-error`

  return (
    <div className="space-y-2">
      <label htmlFor={fieldId} className="block text-sm font-medium text-charcoal">
        {label}
      </label>
      <select
        id={fieldId}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          'h-12 w-full rounded-[var(--radius-sm)] border border-linen bg-warm-white px-4 text-charcoal focus:border-paprika-700 focus:outline-none focus:ring-2 focus:ring-paprika-700/20',
          error && 'border-error',
          className,
        )}
        {...props}
      >
        <option value="">—</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={errorId} className="text-sm text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
