'use client';

import { useEffect, useState } from 'react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [active, setActive] = useState('');

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('article h2, article h3'));
    elements.forEach((element) => {
      if (!element.id) element.id = slugify(element.textContent || '');
    });

    setHeadings(
      elements.map((element) => ({
        id: element.id,
        text: element.textContent || '',
        level: Number(element.tagName[1]),
      })),
    );

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-20% 0px -75% 0px' },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  if (!headings.length) return null;

  return (
    <nav aria-label="Table of Contents" className="toc mx-auto my-8 max-w-4xl rounded-lg border border-pink-100 bg-white p-5 shadow-sm">
      <h2 className="toc-title text-xl font-semibold text-gray-900">Table of Contents</h2>
      <ol className="mt-4 space-y-2">
        {headings.map((heading) => (
          <li key={heading.id} style={{ paddingLeft: heading.level === 3 ? '1rem' : 0 }}>
            <a
              href={`#${heading.id}`}
              className={active === heading.id ? 'text-pink-600 font-semibold' : 'text-gray-700 hover:text-pink-600'}
              aria-current={active === heading.id ? 'location' : undefined}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
