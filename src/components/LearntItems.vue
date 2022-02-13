<template>
  <q-page class="flex">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card" flat bordered v-for="item in items" :key="item.url">
        <q-card-section>
          <div class="text-h6">{{ item.url }}</div>
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
