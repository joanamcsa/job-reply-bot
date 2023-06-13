import { LLMChain } from "langchain/chains"
import { OpenAI } from "langchain/llms/openai"
import { PromptTemplate } from "langchain/prompts"

function createPrompt() {
  const template = `
Act as the person who received the following message. In a formal and nice tone, provide a reply to the message, accepting or rejecting following the ACCEPT boolean.

The output must be in the same language as the input message.

MESSAGE: {message}
ACCEPT: {accept}`

  try {
    return new PromptTemplate({
      template,
      inputVariables: ["message", 'accept'],
    })
  } catch (e) {
    console.error("Error: Something went wrong creating the prompt", e)
  }
}

function buildModel() {
  try {
    return new OpenAI({
      modelName: "gpt-3.5-turbo",
      openAIApiKey: process.env.OPENAI_API_KEY,
      temperature: 0.9,
      topP: 1,
      frequencyPenalty: 0,
      presencePenalty: 0,
      maxTokens: 1024,
      n: 1,
    })
  } catch (e) {
    console.error("Error: Something went wrong building the model", e)
  }
}

const prompt = createPrompt()

const llm = buildModel()

export async function aiReply(message: string, accept: boolean): Promise<string | undefined> {
  "use server"

  try {
    if (!prompt || !llm) {
      console.error("prompt or llm invalid")
      return;
    }

    const chain = new LLMChain({ llm, prompt })

    const res = await chain.call({ message, accept })

    console.log("Successful completion", {
      message,
      res,
    })
    return res.text
  } catch (e) {
    console.error("Error: Something went wrong in the AI reply", e)
  }
}
