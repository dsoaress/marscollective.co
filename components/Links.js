import Button from '@/components/Button'

export default function Links({ data }) {
  return (
    <section className="container max-w-screen-md">
      <div className="grid gap-6">
        {data.translations[0].links.map(({ label, url }, i) => (
          <a href={url} target="_blank" rel="noopener noreferrer" key={i}>
            <Button variant="primary" width="full">
              {label}
            </Button>
          </a>
        ))}
      </div>
    </section>
  )
}
