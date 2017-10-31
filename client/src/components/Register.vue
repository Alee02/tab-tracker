<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
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
      </panel>
    </v-flex>
  </v-layout>

</template>

//  Controller
<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

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
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
.error {
  color: white;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
