"use client"

import * as React from "react"
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {useForm} from "react-hook-form";
import { z } from "zod"
import {zodResolver} from "@hookform/resolvers/zod";
import {useState} from "react";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  message: z.string().min(4, {
    message: "Message must be at least 10 characters.",
  }),
})

type JobOfferFormProps = {
  onClick: (message: string, accept: boolean) => void,
  clearFields: () => void,
}

export function JobOfferForm({ onClick, clearFields }: JobOfferFormProps) {

  const [accept, setAccept] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  })

  async function submitCode(data: z.infer<typeof formSchema>) {
    await onClick(data.message, accept)
  }

  function resetFields() {
    form.resetField('message');
    clearFields()
  }

  const isSubmiting = form.formState.isSubmitting;

  return (
      <div className={'flex flex-col md:w-1/2 w-full'}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submitCode)} className="space-y-2 md:space-y-6">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      disabled={isSubmiting}
                      className={'md:min-h-[350px] min-h-[200px]'}
                      placeholder="Paste your job offer message here."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <div className={'flex gap-2 justify-between'}>
                  <Button
                    variant={'secondary'}
                    className={'max-w-[80px]'}
                    onClick={resetFields}
                  >
                    Clear
                  </Button>
                  <div className={'flex gap-2 justify-end'}>
                    <Button
                      type={'submit'}
                      variant={'secondary'}
                      className={'w-20'}
                      onClick={()=> setAccept(false)}
                      disabled={isSubmiting}
                    >
                      {isSubmiting ? <Loader2 className="h-4 w-4 animate-spin"/> : 'Reject' }
                    </Button>
                    <Button
                      type={'submit'}
                      className={'w-20'}
                      onClick={()=> setAccept(true)}
                      disabled={isSubmiting}
                    >
                      {isSubmiting ? <Loader2 className="h-4 w-4 animate-spin"/> : 'Accept' }
                    </Button>
                  </div>
              </div>
          </form>
        </Form>
      </div>
  )
}



