import cn from 'classnames'
import { CgSpinner } from 'react-icons/cg'

export default function Button({
  children,
  className,
  loading,
  variant,
  width,
  ...rest
}) {
  return (
    <button
      className={cn(className, defaultStyle, {
        [primaryVariant]: variant === 'primary',
        [whiteVariant]: variant === 'white',
        'w-full': width === 'full'
      })}
      disabled={loading}
      {...rest}
    >
      <CgSpinner
        className={cn(spinnerStyle, {
          'opacity-100': loading
        })}
      />
      <span
        className={cn('transition-opacity duration-300', {
          'opacity-0': loading
        })}
      >
        {children}
      </span>
    </button>
  )
}

const defaultStyle = `
  relative
  p-3
  md:py-4
  md:px-8
  border-2
  border-primary
  text-primary
  font-semibold
  leading-none
  rounded-lg
  transition
  duration-500
  bg-transparent
  hover:text-hover
  hover:border-hover
  disabled:opacity-70
  disabled:cursor-wait
`

const primaryVariant = `
  bg-primary
  hover:bg-hover
  text-reverse
  hover:text-reverse
  border-primary
  hover:border-hover
`

const whiteVariant = `border-white text-white`

const spinnerStyle = `
  absolute
  left-0
  right-0
  mx-auto
  animate-spin
  transition-opacity
  duration-300
  opacity-0
`
