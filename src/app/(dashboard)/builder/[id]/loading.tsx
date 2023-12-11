import React from 'react'
import { ImSpinner2 } from 'react-icons/im'

function LoadingPage() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <ImSpinner2 className="h-12 w-12 animate-spin" />
    </div>
  )
}

export default LoadingPage
