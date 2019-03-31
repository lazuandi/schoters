<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card-text>
        <div class="title">Personalize your Schoters homepage</div>
      </v-card-text>
      <v-card-text>
        <div class="subheading">
          Pick 5 top scholarship categories that you are interested to help us
          deliver the most relevant information with your prefrences
        </div>
      </v-card-text>
      <v-layout wrap>
        <div v-for="category in tempCategories" :key="category.id">
          <div v-if="!category.selected">
            <v-chip outline color="#545454" @click="selectCategory(category)">{{
              category.name
            }}</v-chip>
          </div>
          <div v-else>
            <v-chip
              text-color="white"
              color="primary"
              @click="selectCategory(category)"
              >{{ category.name }}</v-chip
            >
          </div>
        </div>
      </v-layout>
      <div>
        <v-btn large color="secondary" @click="pushSelectedCategories"
          >Done</v-btn
        >
      </div>
    </v-flex>
    <v-btn fab fixed bottom right color="secondary">
      <v-icon>chat_bubble</v-icon>
    </v-btn>
  </v-layout>
</template>

<script>
import apiClient from '../eventService'

export default {
  data() {
    return {
      tempCategories: []
    }
  },
  async beforeCreate() {
    const res = await apiClient.get('/categories')
    this.tempCategories = res.data
  },
  methods: {
    selectCategory(selectedCategory) {
      this.tempCategories = [
        ...this.tempCategories.map(category => {
          if (category.id === selectedCategory.id) {
            category.selected = !category.selected
            category.image_url =
              'https://picsum.photos/385/141?image' +
              Math.random() * Math.floor(100)
            return category
          }
          return category
        })
      ]
    },
    pushSelectedCategories() {
      this.$store.dispatch(
        'mutateCategories',
        this.tempCategories.filter(category => category.selected)
      )
      this.$router.push('/home')
    }
  }
}
</script>
