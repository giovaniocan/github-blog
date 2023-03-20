import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <div>
      default
      <Outlet />
    </div>
  )
}
