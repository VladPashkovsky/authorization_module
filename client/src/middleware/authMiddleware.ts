import { createListenerMiddleware } from '@reduxjs/toolkit'
import { apiAuth } from '../app/services/api'

export const authMiddleware = createListenerMiddleware()
authMiddleware.startListening({
  matcher: apiAuth.endpoints.login.matchFulfilled,
  effect: async (action, api) => {
    api.cancelActiveListeners()
    action.payload.token && localStorage.setItem('token', action.payload.token)
  },
})