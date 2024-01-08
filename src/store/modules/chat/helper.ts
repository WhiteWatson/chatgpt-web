import { ss } from '@/utils/storage'
import { t } from '@/locales'

const LOCAL_NAME = 'chatStorage'

export function defaultState(): Chat.ChatState {
  const uuid = 1002
  return {
    active: uuid,
<<<<<<< HEAD
    usingContext: false,
    history: [{ uuid, title: 'New Chat', isEdit: false }],
=======
    usingContext: true,
    history: [{ uuid, title: t('chat.newChatTitle'), isEdit: false }],
>>>>>>> main
    chat: [{ uuid, data: [] }],
  }
}

export function getLocalState(): Chat.ChatState {
  const localState = ss.get(LOCAL_NAME)
  return { ...defaultState(), ...localState }
}

export function setLocalState(state: Chat.ChatState) {
  ss.set(LOCAL_NAME, state)
}
