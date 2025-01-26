import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'ru',
  messages: {
    en: {
      message: {
        dice_roller_title: "Dice Roller",

        language: "Language",
        theme: "Theme",
        dark: "dark",
        light: "light",

        roll_all: "Roll all",
        total: "Total: {total}",

        history_title: "History",

        stats_title: "Probabilities and distribution",
        less: "Less than {total}",
        less_or_equal: "Less or equal to {total}",
        equal: "Equal to {total}",
        more_or_equal: "More or equal to {total}",
        more: "More than {total}",
      }
    },
    ru: {
      message: {
        dice_roller_title: "Игральные кости",

        language: "Язык",
        theme: "Tема",
        dark: "тёмная",
        light: "светлая",

        roll_all: "Бросить все",
        total: "Всего {total}",

        history_title: "История",

        stats_title: "Вероятности и распределение",
        less: "Меньше чем {total}",
        less_or_equal: "Меньше чем или равно {total}",
        equal: "Равно {total}",
        more_or_equal: "Больше чем или равно {total}",
        more: "Больше чем {total}",
      }
    }
  }
})

export default i18n;
