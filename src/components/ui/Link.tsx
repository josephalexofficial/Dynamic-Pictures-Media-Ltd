import {
  Link as RouterLink,
  type LinkProps as RouterLinkProps,
} from "react-router-dom";

type LinkProps = Omit<RouterLinkProps, "to"> & {
  href?: string;
  to?: string;
};

/** Accepts `href` (Next-style) or `to` (React Router) */
export function Link({ href, to, ...props }: LinkProps) {
  return <RouterLink to={to ?? href ?? "/"} {...props} />;
}
