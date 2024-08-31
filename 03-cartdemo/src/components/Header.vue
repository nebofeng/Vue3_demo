<template>
   <div class="main" :style="{ backgroundColor:bgcolor,color:color,fontSize:fsize +'px'}" > {{title}}</div>

</template>


<script>
 export default{
  name: 'Header',
     name: '',
     props:{
         title:{
            type:String,
            default:"demo",
         },
         bgcolor: {
            type: String,
            default: '#007BFF',
         },
         color: {
            type: String,
            default: '#ffffff',
         },
         fsize:{
            type:Number,
            default:12
         }


     }



 }


</script>

<style>
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 45px;
  text-align: center;
  line-height: 45px;
  z-index: 999;


}
</style>