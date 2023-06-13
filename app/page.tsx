import { aiReply } from "@/ai";
import { ReplyOffer } from "@/components/job-offer/replyOffer";
import {AlertAI} from "@/components/job-offer/alertAI";
import Link from "next/link";
import {siteConfig} from "@/config/site";

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
        <p className="text-sm sm:text-lg text-primary">
          With just a few clicks, you can effortlessly handle incoming job offers and craft professional, personalized responses that leave a lasting impression. <br className="inline" />
          <br className="inline" />
          No more fretting over the perfect wording or spending hours crafting responses. <br className="inline" />
          <br className="inline" />
          Let our AI-Powered Job Offer Reply Assistant guide you towards success, one response at a time.<br className="inline" />
        </p>
        <ReplyOffer onClick={replyMessage}/>
      </section>
      <section className="container inset-x-0 bottom-0 flex flex-col gap-2 items-center justify-center p-4 border-t">
        <Link href={siteConfig.links.site} className="text-xs text-muted-foreground">
          © 2023 Joana Santos. All rights reserved.
        </Link>
        <Link href={siteConfig.links.codeScope} className="text-xs text-muted-foreground">
          Inspired by Code Scope.
        </Link>
      </section>
    </>
  )
}
