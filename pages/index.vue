<template>
    <div>
        <v-row>
            <v-col cols="12">
                <v-text-field variant="solo" label="Search" append-inner-icon="fas fa-search"
                    single-line hide-details @click:append-inner="onClick"></v-text-field>
                <v-spacer></v-spacer>
            </v-col>
        </v-row>
    </div>
</template>

<script>

  export default {
    data() {
      return {
        loaded: false,
        loading: false,
      }
    },

    methods: {
      onClick() {
        this.loading = true

        setTimeout(() => {
          this.loading = false
          this.loaded = true
        }, 2000)
      },
    },
  }
</script>

<script setup>
    useHead({
        title: 'Meeovi Search',
    })
</script>