'use client';

import React from 'react';
import NextLink from 'next/link';
import { useParams as useNextParams, usePathname, useRouter } from 'next/navigation';

export function Link({ to, href, replace: _replace, state: _state, reloadDocument: _reloadDocument, ...props }) {
  return <NextLink href={href || to || '#'} {...props} />;
}

export const NavLink = Link;

export function useLocation() {
  const pathname = usePathname() || '/';
  return { pathname, search: '', hash: '', state: null, key: pathname };
}

export function useNavigate() {
  const router = useRouter();
  return (to, options = {}) => {
    if (typeof to === 'number') {
      router.back();
      return;
    }
    if (options.replace) router.replace(to);
    else router.push(to);
  };
}

export function useParams() {
  return useNextParams();
}

export function BrowserRouter({ children }) {
  return <>{children}</>;
}

export function Router({ children }) {
  return <>{children}</>;
}

export function Route() {
  return null;
}

export function Routes({ children }) {
  const pathname = usePathname() || '/';
  const childArray = React.Children.toArray(children);
  const adminPath = pathname.replace(/^\/admin/, '') || '/';
  const match =
    childArray.find((child) => React.isValidElement(child) && child.props.path === adminPath) ||
    childArray.find((child) => React.isValidElement(child) && child.props.path === '/');

  return React.isValidElement(match) ? match.props.element : null;
}
