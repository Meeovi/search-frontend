import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "frontpage"
declare module "C:/Users/sehilton/Documents/github/Portfolio/search-frontend/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}