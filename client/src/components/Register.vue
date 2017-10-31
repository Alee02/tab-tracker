<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title position="middle" dark>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form>
            <v-text-field
              label="Email"
              v-model="email"/>
            <br>
            <v-text-field
              label="Password"
              type="password"
              v-model="password"
              autocomplete="new-password"/>
          </form>
            <br>
            <div class="error" v-html="error"/>
            <br>
            <v-btn dark
              class="cyan"
              @click="register">
              Register
            </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>

</template>

//  Controller
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: white;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
