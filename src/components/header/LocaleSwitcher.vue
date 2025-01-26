<template>
  <div class="setting locale-changer">
    <span class="language">{{ $t('message.language') }}</span>
    <select v-model="$i18n.locale">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
    </select>
  </div>
</template>
