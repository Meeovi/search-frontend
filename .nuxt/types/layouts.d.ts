import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "frontpage"
declare module "C:/Users/Basti/OneDrive/Documents/My Websites/Handmade Sites/Javascript-Projects/Nuxt-Projects/Applications/AlternateCMS-Framework/TheMeeoviCompany-Sites/search-frontend/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}