<template>
    <div>
        <!-- 头部 -->
        <appheader></appheader>
        <div class="main">
            <!-- 侧边栏 -->
            <appaside></appaside>
            <div class="container-fluid">
                <router-view/>
            </div>    
        </div>
    </div>
</template>
<script>
    //引入头部
    import appheader from '../APPheader/Appheader.vue'
    //引入侧边栏
    import appaside from '../Appaside/Appaside.vue'   
    export default{
        components:{
            appheader,
            appaside
        }
    }

</script>
<style scoped>
   

</style>
