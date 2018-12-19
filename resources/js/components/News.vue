<template>
    <div class="box">
        <h1 v-for="(items, index) in news" :key="index">{{items}}</h1>
    </div>
</template>
<script>
export default {
    data : function(){
        return {
            mobile : ["Android" , "Operating Systems", "IOS", "IPad", "Wndows"], 
            desktop : ["Dell", "HP", "laptop", "Maciintosh"],
            id : this.$route.params.id,
            news : []
        }
    }, 
    methods : {
        loadPosts : function(){
            if(this.id === 'mobile'){
                this.news = this.mobile;
            }else{
                this.news = this.desktop
            }
        }
    }, 
    created : function() {
        console.log("Id : ",this.$route.params.id);
        this.loadPosts()
    }, 
    watch : {
        '$route' (to, from){
            this.id = this.$route.params.id;
            this.loadPosts()
        }
    }
}
</script>
