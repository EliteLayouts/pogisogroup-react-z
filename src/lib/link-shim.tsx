import { Link as RouterLink, type LinkProps as RouterLinkProps } from "react-router-dom";
import React from "react";

type Props = Omit<RouterLinkProps, "to"> & { href: RouterLinkProps["to"] };

export default function Link({ href, ...rest }: Props) {
  return <RouterLink to={href} {...rest} />;
}

