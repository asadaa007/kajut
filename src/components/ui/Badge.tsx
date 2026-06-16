import { cn } from '@/lib/utils'

type BadgeVariant = 'default' | 'open' | 'closed' | 'warning' | 'szep' | 'preorder'

const variants: Record<BadgeVariant, string> = {
  default: 'bg-linen text-charcoal',
  open: 'bg-gold-wash text-charcoal',
  closed: 'bg-linen text-ash',
  warning: 'bg-gold-wash text-charcoal border border-warning/30',
  szep: 'bg-forest text-warm-white',
  preorder: 'border border-terracotta-700 text-terracotta-700 bg-transparent',
}

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
  dot?: boolean
}

export function Badge({ children, variant = 'default', className, dot }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider',
        variants[variant],
        className,
      )}
    >
      {dot && (
        <span
          className={cn(
            'h-2 w-2 rounded-full',
            variant === 'open' && 'bg-gold',
            variant === 'closed' && 'bg-ash',
            variant === 'warning' && 'bg-warning',
          )}
          aria-hidden
        />
      )}
      {children}
    </span>
  )
}
