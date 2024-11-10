<template>
    <button  type="button" class="btn" @click="goBack">后退</button>
    <h4> 用户详情 {{ id}}</h4>
</template>
<script>

export default{
    name:'UserDetail',
    props:['id'],
    data(){
        return{

        }
    },
    methods:{
        goBack() {
            this.$router.go(-1)
        }

    }


}

</script>