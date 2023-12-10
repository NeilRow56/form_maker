import { GetForms } from '@/actions/form'
import React from 'react'
import FormCard from './FormCard'

type Props = {}

const FormCards = async (props: Props) => {
  const forms = await GetForms()
  return (
    <>
      {forms.map((form) => (
        <FormCard key={form.id} form={form} />
      ))}
    </>
  )
}

export default FormCards
