import React from 'react'
import {
  DragEndEvent,
  useDndMonitor,
  useDraggable,
  useDroppable,
} from '@dnd-kit/core'

import DesignerSidebar from './DesignerSidebar'

function Designer() {
  const droppable = useDroppable({
    id: 'designer-drop-area',
    data: {
      isDesignerDropArea: true,
    },
  })
  return (
    <div className="flex h-full w-full">
      <div className="w-full p-4">
        <div className="m-auto flex h-full max-w-[920px] flex-1 flex-grow flex-col items-center justify-start overflow-y-auto rounded-xl bg-background">
          <p className="flex flex-grow items-center text-3xl font-bold text-muted-foreground">
            Drop here
          </p>
        </div>
      </div>
      <DesignerSidebar />
    </div>
  )
}

export default Designer
