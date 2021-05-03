import Button from '@/components/Button'

export default function Links({ data }) {
  return (
    <section className="container max-w-screen-md">
      <div className="grid gap-6">
        {data.map(({ _key, label, url }) => (
          <a href={url} target="_blank" rel="noopener noreferrer" key={_key}>
            <Button primary full>
              {label}
            </Button>
          </a>
        ))}
      </div>
    </section>
  )
}
