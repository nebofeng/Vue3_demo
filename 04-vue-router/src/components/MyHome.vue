<template>
    <div class="home-container">
        <my-header></my-header>

        <div class="home-main">
            <my-menus></my-menus>
            <div class="home-main-context">
              <router-view></router-view>
            </div>
            
        </div>


    </div>

</template>

<script>
// 头部区域组件
import MyHeader from './layout/MyHeader.vue'
import MyMenus  from './layout/MyMenus.vue';

export default {
  name: 'MyHome',
  // 注册组件
  components: {
    MyHeader,
    MyMenus,
  },
}
</script>

<style lang="css">
.home-container{
  display: flex;
  flex-direction: column;
  .home-main {
    display: flex;
    flex-direction: row;

    .home-main-context {
      width: 100%;
      padding: 15px;
      flex: 1;
    }
  }

}

</style>
