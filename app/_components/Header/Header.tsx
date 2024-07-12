import { type JSX } from 'react'

export type HeaderProps = {
  title: string
}
const type: string = 'modern'

export default async function Header(props: HeaderProps): Promise<JSX.Element | null> {
  switch (type) {
    case 'minimalistic':
      return await import(
        '@/app/_components/Header/minimalistic/Header'
      ).then((module) => module.default(props))
    case 'modern':
      return await import(
        '@/app/_components/Header/modern/Header'
      ).then((module) => module.default(props))
    default:
      return null
  }
}
