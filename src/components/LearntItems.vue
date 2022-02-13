<template>
  <q-page class="flex">
    <div class="row">
      <q-card class="my-card" flat bordered v-for="item in items" :key="item.url">
        <q-card-section>
          {{ item.url }}
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'LearntItems',
  data() {
    return {
      items: [
        { url: 'http://www.google.com' },
        { url: 'http://www.example.com' },
      ]
    }
  }
}
</script>
