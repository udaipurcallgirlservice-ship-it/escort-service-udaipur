import Link from 'next/link';

interface BreadcrumbItem {
  name: string;
  href: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb py-3 text-sm text-gray-500">
      <ol
        className="flex flex-wrap items-center gap-1"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {items.map((item, index) => (
          <li
            key={item.href}
            className="flex items-center"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {index > 0 && <span className="mx-2 text-gray-400">/</span>}
            {index < items.length - 1 ? (
              <Link itemProp="item" href={item.href} className="hover:text-pink-600 transition-colors">
                <span itemProp="name">{item.name}</span>
              </Link>
            ) : (
              <span itemProp="name" aria-current="page" className="text-gray-900 font-medium">
                {item.name}
              </span>
            )}
            <meta itemProp="position" content={String(index + 1)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}
