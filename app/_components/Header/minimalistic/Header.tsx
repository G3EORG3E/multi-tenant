import { type JSX } from 'react'
import { HeaderProps } from '@/app/_components/Header/Header'
import classes from './Header.module.css'

export default function MinimalisticHeader({
  title,
}: HeaderProps): JSX.Element {
  return (
    <div className={classes.root}>
      <p className="bg-[rebeccapurple]">{title}</p>
    </div>
  )
}
