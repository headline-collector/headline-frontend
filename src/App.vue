<template lang="pug">
div.app
  div.top-bar(v-if="$route.path=='/'")
    div.to-manage
      a(v-link="{name:'manage'}") 管理
  div.top-bar(v-if="$route.path=='/manage'")
    div.to-index
      a(v-link="{name:'index'}") 主页

  div.title
  router-view.router()
</template>

<script>

export default {

}
</script>

<style lang="scss">
  *{
    font-family: "Hiragino Sans GB", "Microsoft YaHei",
    "WenQuanYi Micro Hei", sans-serif;
    border: none;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a{
    color: black ;
    text-decoration: none;
  }

html {
  height: 100%;
  background: snow ;
}

body {
  height: 100%;
}

.app{
  width: 100%;
  justify-content: center;
  align-content: center;
}

  .top-bar{
    background-color: ghostwhite;
    text-shadow: 0 0 10px rgba(0,0,0,0.3);
    font-weight: bolder;
    width: 100px;
    height: 30px;
    color:black;
    line-height: 30px;
    text-align: center;
    opacity: 0.8;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    -moz-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    position: absolute;
    right: 40px;
    top: 0;
    transition: opacity 0.25s;
    &:hover{
      opacity: 1;
    }
  }

  .router{
    min-width: 990px;
    margin: 50px auto;
    width: 85%;
  }

</style>
