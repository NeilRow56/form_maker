import React, { ReactNode } from 'react'

function layout({ children }: { children: ReactNode }) {
  return <div className="mx-auto flex w-full flex-grow">{children}</div>
}

export default layout
