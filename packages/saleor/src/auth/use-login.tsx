import { useCallback } from 'react'

import type { MutationHook } from '@vercel/commerce/utils/types'
import { CommerceError } from '@vercel/commerce/utils/errors'
import useCustomer from '../customer/use-customer'
import * as mutation from '../utils/mutations'
import { Mutation, MutationTokenCreateArgs } from '../../schema'
import useLogin, { UseLogin } from '@vercel/commerce/auth/use-login'
import {
  setCSRFToken,
  setToken,
  throwUserErrors,
  checkoutAttach,
  getCheckoutId,
} from '../utils'
import { LoginHook } from '@vercel/commerce/types/login'

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
