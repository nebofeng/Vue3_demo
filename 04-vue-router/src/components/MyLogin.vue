<template>
    <div class="login-containr">
      <div class="login-box">
            <!-- 表单区域 -->
          <div class="form-login p-4">
            <!-- 登录名称 -->
            <div class="form-group form-inline">
              <label for="username">登录名称</label>
              <input
                type="text"
                class="form-control ml-2"
                id="username"
                placeholder="请输入登录名称"
                autocomplete="off"
                v-model.trim="username"
              />
            </div>
            <!-- 登录密码 -->
            <div class="form-group form-inline">
              <label for="password">登录密码</label>
              <input
                type="password"
                class="form-control ml-2"
                id="password"
                placeholder="请输入登录密码"
                v-model.trim="password"
              />
            </div>
            <!-- 登录和重置按钮 -->
            <div class="form-group form-inline d-flex justify-content-end">
              <button type="button" class="btn btn-secondary mr-2">重置</button>
              <button type="button" class="btn btn-primary" @click="onLoginClick">登录</button>
            </div>
          </div>

      </div>
    </div>   

</template>
<script>
  export default {
    data(){
      return {
        username:'',
        password:''
      }
    },
    methods:{
      onLoginClick(){
           if(this.username=="admin" && this.password=="123456"){
            localStorage.setItem('token', 'Bearer xxx')
            this.$router.push('/home')
           }else {
             localStorage.removeItem('token')
             window.alert("密码错误")

           }
        }

    }

  }


</script>
<style>
.login-containr {
    background-color: #35495e;
    height: 100%;
    width: 100%;
   .login-box {
      width: 400px;
      height: 250px;
      background-color: #fff;
      border-radius: 3px;
      display: flex;
      flex-direction: column;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 6px rgba(255, 255, 255, 0.5);
      align-items: center;
      .form-login{
        position: absolute;
        bottom: 0;

      }
     
    
     

   }

}
</style>