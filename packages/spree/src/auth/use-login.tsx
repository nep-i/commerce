import { useCallback } from 'react'
import type { MutationHook } from '@vercel/commerce/utils/types'
import useLogin, { UseLogin } from '@vercel/commerce/auth/use-login'
import type { LoginHook } from '@vercel/commerce/types/login'
import type { AuthTokenAttr } from '@spree/storefront-api-v2-sdk/types/interfaces/Authentication'
import { FetcherError, ValidationError } from '@vercel/commerce/utils/errors'
import useCustomer from '../customer/use-customer'
import useCart from '../cart/use-cart'
import useWishlist from '../wishlist/use-wishlist'
import login from '../utils/login'

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
