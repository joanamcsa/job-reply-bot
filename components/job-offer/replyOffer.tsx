"use client"

import * as React from "react"
import { JobOfferForm } from "@/components/job-offer/jobOfferForm";
import {ReplyMessage} from "@/components/job-offer/replyMessage";
import {useState} from "react";
import { useToast } from "@/components/ui/use-toast";
import {Toaster} from "@/components/ui/toaster";
import {copyToClipboard} from "@/utils/clipboard";

type ReplyOfferProps ={
  onClick: (message: string, accept: boolean) => Promise<string | undefined>
}
export function ReplyOffer({ onClick }: ReplyOfferProps) {
  const [replyMessage, setReplyMessage] = useState<string | undefined>();
  const { toast } = useToast();

  async function submitCode(message: string, accept: boolean) {
    const messageReceived = await onClick(message, accept)

    if(messageReceived) {
      setReplyMessage(messageReceived)
      copyToClipboard(messageReceived)
      toast({
        title: 'Message copied to clipboard'
      })
    } else {
      toast({
        variant: "destructive",
        title: "Something went wrong.",
      })
    }
  }

  function clearFields(){
    setReplyMessage('');
  }

  return (
    <>
      <div className={'flex flex-col md:flex-row justify-between gap-4'}>
        <JobOfferForm onClick={submitCode} clearFields={clearFields}/>
        <ReplyMessage message={replyMessage} />
      </div>
      <Toaster/>
    </>
  )
}



