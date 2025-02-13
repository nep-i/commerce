import { useCallback } from 'react'
import type { MutationHook } from '@vercel/commerce/utils/types'
import { CommerceError } from '@vercel/commerce/utils/errors'
import useLogin, { UseLogin } from '@vercel/commerce/auth/use-login'
import type { LoginHook } from '@vercel/commerce/types/login'
import useCustomer from '../customer/use-customer'

export default useLogin as UseLogin<typeof handler>

export const handler: MutationHook<any> = {
  fetchOptions: {
    query: '',
  },
  async fetcher() {
    return null
  },
  useHook: () => () => {
    return async function () {}
  },
}
