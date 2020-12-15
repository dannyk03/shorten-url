<template>
  <v-row justify="center" align="center">
    <v-card
      class="mx-auto"
      width="500"
    >
      <v-card-title>Shorten URL</v-card-title>

      <v-card-text class="text--primary">
        <v-row no-gutters>
          <v-col cols="12">
            <v-text-field
              v-model="originUrl"
              :disabled="isShorten"
              label="Link"
              hide-details
            />
          </v-col>
          <v-col
            cols="12"
            class="d-flex align-center justify-space-between"
          >
            <v-checkbox
              v-model="isShorten"
              :disabled="isShorten || !originUrl"
              label="Shorten URL"
            />
            <v-btn
              text
              v-if="isShorten"
              @click="newUrl"
            >
              New
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions>
        <v-spacer />

        <v-btn
          text
          :disabled="!isShorten"
          v-clipboard:copy="this.originUrl"
        >
          Copy
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-row>
</template>

<script>
export default {
  components: {
  },

  data: () => ({
    originUrl: '',
    isShorten: false,
    loading: false
  }),

  watch: {
    isShorten (val) {
      if (val) {
        this.shortenUrl(this.originUrl)
      }
    }
  },

  methods: {
    newUrl () {
      this.isShorten = false
      this.originUrl = ''
    },
    async shortenUrl (url) {
      try {
        const resp = await this.$http.$post(`/api/url?url=${url}`)
        this.originUrl = location.origin + `/${resp.id}`
      } catch (err) {
        // pass
      }
    }
  }
}
</script>
