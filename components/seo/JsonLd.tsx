type JsonLdNode = Record<string, unknown>;

function withoutContext(node: object) {
  const record = node as JsonLdNode;
  const { '@context': _context, ...rest } = record;
  return rest;
}

export default function JsonLd({ data }: { data: object | object[] }) {
  const payload = Array.isArray(data)
    ? {
        '@context': 'https://schema.org',
        '@graph': data.map(withoutContext),
      }
    : data;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
