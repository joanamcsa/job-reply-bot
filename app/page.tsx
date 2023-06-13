import { aiReply } from "@/ai";
import { ReplyOffer } from "@/components/job-offer/replyOffer";
import {AlertAI} from "@/components/job-offer/alertAI";

export default function IndexPage() {
  async function replyMessage(message: string, accept: boolean): Promise<string | undefined> {
    "use server"

    return aiReply(message, accept)
  }

  return (
    <>
      <section className="container grid items-center gap-10 pb-8 pt-6 md:py-10">
        <div className="flex w-full flex-col md:flex-row items-start gap-2 justify-between">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl min-w-fit">
            ✨ AI-Powered Job Offer Reply Assistant. <br className="hidden sm:inline" />
            Seamlessly Connect with Opportunities.
          </h1>
          <AlertAI />
        </div>
        <ReplyOffer onClick={replyMessage}/>
      </section>
      <section className="container inset-x-0 bottom-0 flex items-center justify-center p-4 border-t">
        <p className="text-xs text-muted-foreground">
          © 2023 Joana Santos. All rights reserved.
        </p>
      </section>
    </>
  )
}
