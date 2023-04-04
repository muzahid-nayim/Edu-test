<template>
    <h2>Notice Details</h2>
    <h1>notice id is {{ id }}</h1>
    <code><h3> Notice details is =></h3> {{ notice.body }}</code>
    <img :src="notice.url" alt="">
</template>

<script>
import axios from 'axios';

export default {
    props:['id'],
    data(){ 
        return{
            notice:[]
        }
    },
    mounted(){
        // fetch('https://jsonplaceholder.typicode.com/posts/' + this.id)
        // .then(res => res.json())
        // .then(data=> this.notice = data)
        // .catch(err=>console.error(err))

        axios.get(' https://jsonplaceholder.typicode.com/posts/' + this.id)
        .then(res => {
            console.log(res.data);
            this.notice = res.data
        })
    }
}

</script>