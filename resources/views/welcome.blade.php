@include('header')
  <body>

    <div id = "app">

      <section class="hero is-primary is-medium">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Todo Application
            </h1>
            <h2 class="subtitle">
            
            </h2>
          </div>
        </div>
  
        <div class="hero-foot">
          <nav class="tabs">
            <div class="container">
              <ul>
                <router-link to="/">All Reminders</router-link>
                <router-link to="/add">Add Reminder</router-link>
                <router-link to="/deleted">Trash</router-link>
                <router-link to="/news/desktop">Desktop News</router-link>
                <router-link to="/news/mobile">Mobile News</router-link>
                <router-link to="/hacking">Dungeon Hole</router-link>
              </ul>
            </div>
          </nav>
        </div>
        
      </section>
      <router-view></router-view>
    </div>
  </body>

  <script src="{{mix('js/app.js')}}"></script>
</html>