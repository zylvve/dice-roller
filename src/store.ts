import { reactive } from "vue";

export const store = reactive({
  theme: 'night-owl',
  setTheme(th: string) {
    this.theme = th;
  }
})
