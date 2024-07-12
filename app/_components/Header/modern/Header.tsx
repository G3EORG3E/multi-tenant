import { type JSX } from 'react'
import { HeaderProps } from '@/app/_components/Header/Header'
import classes from './Header.module.css'

export default function ModernHeader({ title }: HeaderProps): JSX.Element {
  return (
    <div className={classes.root}>
      <p className="bg-green-500">{title}</p>
    </div>
  )
}
