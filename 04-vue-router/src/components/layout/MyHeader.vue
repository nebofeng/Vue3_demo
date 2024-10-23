<template>
    <div class="header-container p-3">
        <div class="header-title">
             <h4 class="ml-3">后台管理系统 </h4>
        </div>
        <div class="header-logout">
            <button type="button" class="btn btn-light" @click="onLogout">退出登录</button>

        </div>


    </div>


</template>
<script>
export default {
    name: 'MyHeader',
    methods: {

        onLogout() {
            localStorage.removeItem("token")
            this.$router.push('/login')


        }
    }

}


</script>
<style lang="css">

.header-container{
    height: 60px;
    
    border-bottom: 1px solid #eaeaea;
 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .header-title{
        align-items: center;
    }

}

</style>