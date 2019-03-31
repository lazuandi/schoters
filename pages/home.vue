<template>
  <v-flex xs12 sm6 offset-sm3 align-center justify-center column fill-height>
    <v-card
      v-for="category in selectedCategories"
      :key="category.id"
      style="margin-bottom:'10px'"
    >
      <v-img :src="category.image_url" aspect-ratio="2.75"></v-img>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{ category.name }}</h3>
          <div>{{ category.description_id }}</div>
        </div>
      </v-card-title>
    </v-card>
  </v-flex>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState(['selectedCategories'])
}
</script>
<style scoped></style>
