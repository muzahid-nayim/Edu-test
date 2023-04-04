<template>
    <h1>Notice page! </h1>
    <div v-if="notices.length">
            <div v-for="notice in notices" :key="notice.id">
        <router-link :to="{name:'notice-details', params:{id: notice.id}}">
            <h2>{{ notice.title }}</h2>
        </router-link>
        </div>
    </div>

    <div v-else>
        <h1><code>Loading.....</code></h1>
    </div>
   
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            notices: [ ]
               
           
        }
    },
    mounted(){
    //     fetch(' https://jsonplaceholder.typicode.com/posts')
    //     .then(res => res.json())
    // .then(data=> {
    //     this.notices = data
    //     console.log(data);
    // })
        // .catch(err=>console.log(err.message))

       axios.get(' https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            // console.log(res.data);
            this.notices = res.data
        })
    }
}

</script>