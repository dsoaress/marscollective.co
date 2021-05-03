const base =
  'block border-none rounded-lg bg-white text-black w-full p-3 focus:outline-none focus:border-none'

export const Input = ({ label, name, ...rest }) => (
  <input
    className={base}
    placeholder={label}
    aria-label={label}
    name={name}
    id={name}
    {...rest}
  />
)

export const TextArea = ({ label, name, ...rest }) => (
  <textarea
    className={`${base} h-36 resize-none`}
    placeholder={label}
    aria-label={label}
    name={name}
    id={name}
    {...rest}
  />
)
