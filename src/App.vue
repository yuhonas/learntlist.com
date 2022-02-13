<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
        <div>LearntList</div>
    </q-header>
    <q-page-container>
      <LearntItems />
    </q-page-container>
  </q-layout>
</template>

<script>
import LearntItems from './components/LearntItems.vue'

export default {
  name: 'LayoutDefault',

  components: {
    LearntItems
  },
}
</script>
