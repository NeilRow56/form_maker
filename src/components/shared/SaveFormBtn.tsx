import React from 'react'
import { HiSaveAs } from 'react-icons/hi'
import { FaSpinner } from 'react-icons/fa'
import { Button } from '../ui/button'

function SaveFormBtn({ id }: { id: string }) {
  return (
    <Button variant={'outline'} className="gap-2" onClick={() => {}}>
      <HiSaveAs className="h-4 w-4" />
      Save
      {/* {loading && <FaSpinner className="animate-spin" />} */}
    </Button>
  )
}

export default SaveFormBtn
