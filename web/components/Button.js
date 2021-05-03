export default function Button({ children, primary, ...rest }) {
  return (
    <button
      className={`p-3 md:py-4 md:px-8 border-2 font-semibold leading-none rounded-lg transition duration-500 ${
        primary
          ? `bg-primary hover:bg-hover text-reverse border-transparent`
          : `bg-transparent text-default border-default hover:text-hover hover:border-hover`
      }`}
      {...rest}
    >
      {children}
    </button>
  )
}
