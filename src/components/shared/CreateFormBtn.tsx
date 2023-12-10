'use client'

import React from 'react'
import { BsFileEarmarkPlus } from 'react-icons/bs'
import { ImSpinner2 } from 'react-icons/im'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Button } from '../ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { formSchema, formSchemaType } from '@/schemas/form'
import { useForm } from 'react-hook-form'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { toast } from '../ui/use-toast'
import { useRouter } from 'next/navigation'

type Props = {}

const CreateFormBtn = (props: Props) => {
  const router = useRouter()
  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (values: formSchemaType) => {
    try {
      toast({
        title: 'Success',
        description: 'Form created successfully',
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong, please try again later',
        variant: 'destructive',
      })
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={'outline'}
          className="group flex h-[190px] flex-col items-center justify-center gap-4 border border-dashed border-primary/20 hover:cursor-pointer hover:border-primary"
        >
          <BsFileEarmarkPlus className="h-8 w-8 text-muted-foreground group-hover:text-primary" />
          <p className="text-xl font-bold text-muted-foreground group-hover:text-primary">
            Create new form
          </p>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create form</DialogTitle>
          <DialogDescription>
            Create a new form to start collecting responses
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea rows={5} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <DialogFooter>
          <Button
            onClick={form.handleSubmit(onSubmit)}
            disabled={form.formState.isSubmitting}
            className="mt-4 w-full"
          >
            {!form.formState.isSubmitting && <span>Save</span>}
            {form.formState.isSubmitting && (
              <ImSpinner2 className="animate-spin" />
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CreateFormBtn
