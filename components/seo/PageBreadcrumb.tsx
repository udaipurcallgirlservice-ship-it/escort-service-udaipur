'use client';

import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';
import JsonLd from './JsonLd';
import { breadcrumbSchema } from '../../lib/schema';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface PageBreadcrumbProps {
  items: BreadcrumbItem[];
  current: string;
}

export default function PageBreadcrumb({ items, current }: PageBreadcrumbProps) {
  const allItems = [{ name: 'Home', url: 'https://escortserviceudaipur.com' }, ...items];
  const schema = breadcrumbSchema(allItems);

  return (
    <>
      <JsonLd data={schema} />
      <nav aria-label="Breadcrumb" className="bg-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-gray-600 hover:text-pink-600 transition-colors flex items-center">
                <Home className="w-4 h-4" />
                <span className="sr-only">Home</span>
              </Link>
            </li>
            {items.map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <Link href={item.url.replace('https://escortserviceudaipur.com', '')} className="text-gray-600 hover:text-pink-600 transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="flex items-center space-x-2">
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-gray-900 font-medium">{current}</span>
            </li>
          </ol>
        </div>
      </nav>
    </>
  );
}
