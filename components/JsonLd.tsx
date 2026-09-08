// Renders Schema.org JSON-LD structured data for search engines.
type JsonLdProps = {
  data: Record<string, unknown>
}
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
    
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  )
}