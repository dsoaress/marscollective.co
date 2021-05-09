import cn from 'classnames'

export default function Heading({ as, children, className, ...rest }) {
  const Element = { as }

  return (
    <Element.as
      className={cn(
        'font-body font-semibold',
        {
          [h1Style]: as === Sizes.h1,
          [h2Style]: as === Sizes.h2,
          [h3Style]: as === Sizes.h3
        },
        className
      )}
      {...rest}
    >
      {children}
    </Element.as>
  )
}

const Sizes = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3'
}

const h1Style = `
  font-black
  font-heading
  uppercase
  text-4xl
  sm:text-5xl
  md:text-6xl
`

const h2Style = `
  font-black
  font-heading
  uppercase
  mb-8
  text-3xl
  sm:mb-12
  md:mb-16
  md:text-4xl
  lg:mb-20
  lg:text-5xl
`

const h3Style = `
  text-2xl
  md:mb-2
  lg:text-3xl
`

Heading.defaultProps = {
  as: Sizes.h2
}
