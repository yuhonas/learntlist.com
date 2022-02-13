<template>
  <q-page class="flex">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-spinner-gears color="primary" size="4em" v-if="loading" />
      <q-card class="my-card" flat bordered v-for="learnt in learnts" :key="learnt.url">
        <q-card-section>
          <div class="text-h6">{{ learnt.id }}</div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import { API } from 'aws-amplify';
import { listLearnts } from '../graphql/queries';

export default {
  name: 'LearntItems',
  async created() {
    this.getLearnts();
  },
  data() {
    return {
      learnts: [
      ],
      nextToken: null,
      loading: true
    }
  },
  methods: {
    async getLearnts() {
      const learnts = await API.graphql({
        query: listLearnts
      });

      this.learnts = learnts.data.listLearnts.items;
      this.nextToken = learnts.data.listLearnts.nextToken;
      this.loading = false
    }
  }}
</script>
