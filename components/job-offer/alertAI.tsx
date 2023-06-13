import { AlertTriangle } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function AlertAI() {
  return (
    <Alert className="border-amber-200 max-w-fit">
      <AlertTriangle className="h-4 w-4 stroke-amber-200"/>
      <AlertTitle>Heads up</AlertTitle>
      <AlertDescription>
        <p>
          All data is sent to <code>OpenAI</code>
        </p>
      </AlertDescription>
    </Alert>
  )
}
