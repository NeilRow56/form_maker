'use client'

import { MdTextFields } from 'react-icons/md'
import { ElementsType, FormElement } from '../shared/FormElements'

const type: ElementsType = 'TextField'

export const TextFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes: {
      label: 'Text field',
      helperText: 'Helper text',
      required: false,
      paceholder: 'Value here',
    },
  }),
  designerBtnElement: {
    icon: MdTextFields,
    label: 'Text Field',
  },
  designerComponent: () => <div>Designer Component</div>,
  formComponent: () => <div>Form Component</div>,
  propertiesComponent: () => <div>Designer Component</div>,
}
