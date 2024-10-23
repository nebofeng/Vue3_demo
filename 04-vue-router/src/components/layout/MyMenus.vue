<template>
    <div class="menus-container">
        <ul class="menus-items user-select-none">
            <li> <router-link to="/home/users">用户管理</router-link></li>
            <li> <router-link to="/home/rights">权限管理</router-link></li>
            <li> <router-link to="/home/goods">商品管理</router-link></li>
            <li> <router-link to="/home/orders">订单管理</router-link></li>
            <li>  <router-link to="/home/settings">系统设置</router-link></li>
        </ul>


    </div>


</template>

<style lang="less" scoped>
.menus-container {
    width: 250px;
    height: 100%;
    border-right: 1px solid #eaeaea;
   

    .menus-items {
        list-style-type: none;
        padding: 0;

        li {
        line-height: 50px;
        font-weight: bold;
        font-size: 14px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
            Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

        &:hover {
            background-color: #efefef;
            cursor: pointer;
        }

        a {
            display: block;
            color: black;
            padding-left: 30px;

            &:hover {
                text-decoration: none;
            }
        }
    }

    }

    


}

// 设置路由高亮效果
.router-link-active {
  background-color: #efefef;
  box-sizing: border-box;
  position: relative;
  // 伪元素实现路由高亮效果
  &::before {
    content: ' ';
    display: block;
    width: 4px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #42b983;
  }
}
</style>