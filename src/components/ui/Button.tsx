import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const variants: Record<Variant, string> = {
  primary:
    'bg-paprika-700 text-warm-white hover:bg-paprika-900 shadow-sm focus-visible:ring-paprika-700',
  secondary:
    'bg-terracotta-700 text-warm-white hover:bg-paprika-700 shadow-sm focus-visible:ring-terracotta-700',
  outline:
    'border-[1.5px] border-paprika-700 text-paprika-700 bg-transparent hover:bg-paprika-700/8 focus-visible:ring-paprika-700',
  ghost:
    'text-charcoal hover:text-paprika-700 bg-transparent underline-offset-4 hover:underline focus-visible:ring-paprika-700',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm min-h-[40px]',
  md: 'px-6 py-3 text-sm min-h-[44px]',
  lg: 'px-8 py-3.5 text-base min-h-[52px]',
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:pointer-events-none disabled:opacity-50'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => (
    <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  ),
)
Button.displayName = 'Button'

interface ButtonLinkProps extends LinkProps {
  variant?: Variant
  size?: Size
}

export function ButtonLink({
  className,
  variant = 'primary',
  size = 'md',
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </Link>
  )
}

interface ExternalButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
  size?: Size
}

export function ExternalButton({
  className,
  variant = 'primary',
  size = 'md',
  children,
  ...props
}: ExternalButtonProps) {
  return (
    <a
      className={cn(base, variants[variant], sizes[size], className)}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  )
}
