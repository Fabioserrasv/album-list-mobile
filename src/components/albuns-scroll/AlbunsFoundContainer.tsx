import { Children, ReactNode } from "react"
import { AlbunsScrollContainer } from "./albuns-scroll.styles"

type AlbunsScrollContainerProps = {
  children: ReactNode
}

export function AlbunsScroll({ children }: AlbunsScrollContainerProps) {
  return (
    <AlbunsScrollContainer>
      {children}
    </AlbunsScrollContainer>
  )
}

