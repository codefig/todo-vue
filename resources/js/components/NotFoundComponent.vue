<template>
    <div>
        <h1 v-if="isAuthenticated">Logout</h1>
        <h1 v-else>Login</h1>
    </div>
</template>

<script>
  export default {
      data : function(){
          return {
              title  : "Login", 
          }
      }, 
      computed : {
          isAuthenticated : function(){
              return this.$store.state.isAuthenticated;
          }
      }
  }

</script>
