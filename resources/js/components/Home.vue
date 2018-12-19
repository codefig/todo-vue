<template>
  <div>
    <section class="container">
      <table class="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Date/Time</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(items,index) in tasks " v-bind:key="index">
            <th>{{items.id}}</th>
            <td>{{items.title | capitalize}}</td>
            <td>{{items.description}}</td>
            <td>
              <a :id="items.id" class="button is-primary" @click.prevent="fetchTask(items.id)">Edit</a>
              <a
                :id="items.id"
                class="button is-danger"
                @click.prevent="deleteTask(items.id)"
              >Delete</a>
            </td>
          </tr>
        </tbody>
      </table>

      <div id="modal" :class="modalClass">
  <div class="modal-background"></div>
  <div class="modal-content">
    <div class="box">
      <h3>Edit Task</h3>
      <article>
        <div class="field">
          <div class="control">
            <input type='text' class="input is-primary" placeholder="Title" v-model="title">
          </div>
        </div>

        <div class="field">
          <div class="control">
            <textarea class="textarea" placeholder="Edit Description" v-model="description"></textarea>
          </div>
        </div>

        <button type="submit" class="button is-primary" @click="saveEditing()">Save</button>
        <button class="button is-danger" @click="cancelEditing()">Cancel</button>
      </article>
    </div>
  </div>
  <button class="modal-close is-large"></button>
</div>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    // console.log("This is the moutn function");
    this.fetchItems();
  },
  data() {
    return {
      title: "",
      description: "",
      tasks: {},
      taskId: "",
      modalClass: "modal",
    };
  },
  methods: {
    deleteTask: function(taskId) {
      console.log("this is delete task fucntion", taskId);
    },
    fetchTask: function(taskId) {
      console.log("This is the edit task function", taskId);
      axios.get('/fetch/'+taskId).then(response => {
        console.log(response);
        this.title = response.data.title;
        this.description= response.data.description;
        this.taskId = response.data.id;
      })
      this.modalClass = "modal is-active";
    },
    fetchItems: function() {
      axios.get("/getall").then(response => {
        this.tasks = response.data;
        console.log(response);
      });
    }, 
    cancelEditing : function(){
      this.modalClass = "modal";
    }, 

    saveEditing: function(){
      console.log('Save the editing : ', this.taskId);
      axios.post('/update',{
        title : this.title,
        description : this.description, 
        taskid : this.taskId,
      }).then(response => {
         console.log(response);
      })
    }
    
  }, filters : {
      capitalize : function(value, start, end){
        return value.toUpperCase();
      }
  }, 
  computed : {
    isAuthenticated : function(){
      return this.$store.state.isAuthenticated;
    }
  }
};
</script>
