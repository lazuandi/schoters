<template>
  <v-app>
    <v-toolbar color="primary" :clipped-left="clipped" fixed app>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon color="white">menu</v-icon>
      </v-btn>
      <v-toolbar-title class="white--text" v-text="title" />
      <v-text-field
        label="Solo"
        placeholder="Cari Beasiswa Apa?"
        solo
        class="v-input__control"
      ></v-text-field>
      <v-spacer />
      <v-btn color="accent" icon>
        <v-icon color="black">person</v-icon>
      </v-btn>
      <v-btn color="primary" icon>
        <v-icon dark color="black">notifications</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      title: 'Schoters'
    }
  }
}
</script>

<style>
.v-input__control {
  margin: 5px 38px;
  max-width: 800px;
}
.v-input__control .v-input__slot {
  margin-bottom: 0px;
  height: 40px;
}
</style>
