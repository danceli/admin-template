import { ReactNode } from "react"

export type RouteObject = {
  path?: string,
  element: ReactNode,
  children?: RouteObject[],
  meta?: {
    requireAuth?: boolean,
    title?: string,
    key?: string
  }
}