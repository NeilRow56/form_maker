'use server'

import { db } from '@/lib/db'
import { formSchema, formSchemaType } from '@/schemas/form'
import { currentUser } from '@clerk/nextjs'

class UserNotFoundError extends Error {}

export async function GetFormStats() {
  const user = await currentUser()

  if (!user) {
    throw new UserNotFoundError()
  }

  const stats = await db.form.aggregate({
    where: {
      userId: user.id,
    },
    _sum: {
      visits: true,
      submissions: true,
    },
  })

  const visits = stats._sum.visits || 0
  const submissions = stats._sum.submissions || 0

  let submissionRate = 0

  if (visits > 0) {
    submissionRate = (submissions / visits) * 100
  }

  const bounceRate = 100 - submissionRate

  return {
    visits,
    submissions,
    submissionRate,
    bounceRate,
  }
}

export async function CreateForm(data: formSchemaType) {
  const validation = formSchema.safeParse(data)
  if (!validation.success) {
    throw new Error('form not valid')
  }

  const user = await currentUser()
  if (!user) {
    throw new UserNotFoundError()
  }

  const { name, description } = data

  const form = await db.form.create({
    data: {
      userId: user.id,
      name,
      description,
    },
  })

  if (!form) {
    throw new Error('something went wrong')
  }

  return form.id
}

export async function GetForms() {
  const user = await currentUser()
  if (!user) {
    throw new UserNotFoundError()
  }

  return await db.form.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })
}

export async function GetFormById(id: string) {
  const user = await currentUser()
  if (!user) {
    throw new UserNotFoundError()
  }

  return await db.form.findUnique({
    where: {
      userId: user.id,
      id,
    },
  })
}
