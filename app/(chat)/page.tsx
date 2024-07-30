import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { AI } from '@/lib/chat/actions'
import { Session } from '@/lib/types'
import { getMissingKeys } from '@/app/actions'

export const metadata = {
  title: 'StockAI'
}

export default async function IndexPage() {
  const id = nanoid()
  const session = {} as Session
  const missingKeys = await getMissingKeys()

  return (
    <>
    <AI initialAIState={{ chatId: id, messages: [] }}>
      <Chat id={id} session={session} missingKeys={missingKeys} />
    </AI>
    </>
  )
}
