<template>
  <div>
    <div class="container">
      <br>
      <br>

      <form method="post" @submit.prevent="addTask">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Title</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input
                  id="title"
                  class="input"
                  type="text"
                  placeholder="e.g. Programming "
                  v-model="title"
                >
              </div>
              <!-- <p class="help is-danger">
        This field is required
              </p>-->
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Description</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <textarea
                  id="description"
                  class="textarea"
                  placeholder="I want to ..."
                  v-model="description"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label">
            <!-- Left empty for spacing -->
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input type="hidden" name="_token">
                <input type="submit" class="button is-primary" value="Add Task">
              </div>
            </div>
          </div>

        </div>
      </form>
    <br/>
      <div v-bind:class="errClass">
      <li v-for="(key, index) in errors" :key="index">{{key}}</li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      title: "",
      description: "", 
      errors : "", 
      errClass : "",
    };
  },
  methods: {
    addTask() {
      console.log("This is meant to add task");
      axios
        .post("/add", {
          title: this.title,
          description: this.description
        })
        .then(response => {
          console.log(response);
          if (response.data.success) {
            //task was  added successfully !;
            this.title = "";
            this.description = "";
            this.errClass = "notification is-primary";
            this.errors = response.data;
          }
          else{
            this.errClass = "notification is-danger";
            this.errors = response.data;
          }
        })
    }
  }
};
</script>