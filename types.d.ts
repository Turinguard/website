/// <reference types="nuxt" />

declare const useAsyncData: any
declare const queryCollection: any
declare const useSeoMeta: any
declare const useCookie: any
declare const useRouter: any
declare const useRoute: any
declare const defineNuxtPlugin: any
declare const defineNitroPlugin: any
declare const useRuntimeConfig: any

declare module "*.png" {
  const src: string
  export default src
}
