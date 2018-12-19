<template>
    <div class="">
        <slot name="header"></slot>
         
          <slot name="content"></slot>
    </div>
</template>

<script>
    export  default {

        props : ['post']
    }
</script>