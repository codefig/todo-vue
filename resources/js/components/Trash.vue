<template>

    <div class="container">
      <h1>Trash Component</h1>
      <ul>
        <div  v-for="(post, id) in posts" :key="id">
          
           <post-element :post="post">
             <h3 slot="header">Element : {{post.id}}</h3>
              <div class="box" slot="content">{{post.name}}</div>
           </post-element>
        </div>
      </ul>
    </div>
</template>

<script>
  import PostElement from './PostElement.vue';
  export default {
      components : {
        'post-element' : PostElement
      },
      data : function(){
        return {
             posts : [
               {'id':1, "name": "Moshood"},
               {'id': 2, 'name': "barbanas"},
               {'id': 3, "name": "asari dokubo"}
             ],
             username : "Moshood Alaran",
        }
      }
  }

</script>