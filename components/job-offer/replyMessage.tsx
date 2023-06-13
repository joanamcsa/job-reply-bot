"use client"

import * as React from "react"
import { Textarea } from "@/components/ui/textarea";
import {AlertTriangle} from "lucide-react";

export function ReplyMessage({ message }: { message?: string }) {

  return (
    <div className={'flex flex-col gap-2 md:w-1/2 w-full justify-between'}>
      <Textarea
        placeholder={'Your reply will appear here.'}
        value={message}
        disabled={!message}
        className={'md:min-h-[350px] min-h-[200px]'}
      />
      <div className="flex items-center text-muted-foreground min-h-[40px]">
        <AlertTriangle className="mr-1 h-4 w-4 stroke-amber-200" />
        <small>
          Model: gpt-3.5-turbo * Generated content may be inaccurate or
          false.
        </small>
      </div>
    </div>
  )
}



