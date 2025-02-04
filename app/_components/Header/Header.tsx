import { type JSX } from 'react'
import dynamic from "next/dynamic";

const MinimalisticHeader = dynamic(() => import("@/app/_components/Header/minimalistic/Header"))
const ModernHeader = dynamic(() => import("@/app/_components/Header/modern/Header"))

export type HeaderProps = {
  title: string
}
const type: string = 'modern'

export default function Header(props: HeaderProps): JSX.Element | null {
  switch (type) {
    case 'minimalistic':
      return <MinimalisticHeader {...props} />
    case 'modern':
      return <ModernHeader {...props} />
    default:
      return null
  }
}
