<template>
  <v-row justify="center" align="center" v-if="url">
    Use {{ url.origin }} to forward origin url
  </v-row>
</template>

<script>
export default {
  components: {
  },

  async asyncData ({ params, error, $http }) {
    try {
      const resp = await $http.$get(`/api/url/${params.id}`)

      console.log('We can redirect from here', resp)
      return {
        url: resp
      }
    } catch (err) {
      error({ statusCode: 404, message: 'User not found' })
    }
  },

  data: () => ({
  }),

  watch: {
  },

  methods: {
  }
}
</script>
