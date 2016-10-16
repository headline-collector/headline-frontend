<template lang="pug">
div.app
  div.top-bar(v-if="$route.path=='/'")
    div.to-manage
      a(v-link="{name:'manage'}") 管理
  div.top-bar(v-if="$route.path=='/manage'")
    div.to-index
      a(v-link="{name:'index'}") 主页
  div.top-bar.logout(v-if="$route.path!='/login'&&$route.path!='/register'",@click="logOut")
    div.logout
      a 登出
  div.title
  router-view.router()
</template>

<script>
  import axios from 'axios'
  import $cookie from 'vue-cookie'

export default {
  methods:{
    logOut(){
      axios.defaults.headers.common['Access-Control-Allow-Origin']="*";
      axios.defaults.headers.common["Content-Type"]="application/x-www-form-urlencoded";
      axios.get('http://121.201.13.36/sitelist/',{
        token:$cookie.get("token")
      })
        .then(function (response) {
          var result = response.data;
          $cookie.delete("token")
          window.location='#!/login';
        })
        .catch(function (error) {
          console.log(error);
          $cookie.delete("token")
          window.location='#!/';
        });
    }
  }
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
    box-sizing: border-box;
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
    cursor: pointer;
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

  .logout{
    top:0;
    right: 150px;
  }

  .router{
    min-width: 990px;
    margin: 50px auto;
    width: 85%;
  }

</style>
