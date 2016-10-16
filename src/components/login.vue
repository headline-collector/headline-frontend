<template lang="pug">
.login
  h1 登陆
  form(method='post')
    input(type='text', name='u', placeholder='用户名', required='required')
    input(type='password', name='p', placeholder='密码', required='required')
    button.btn.btn-primary.btn-block.btn-large(type='submit') 提交
  a.btn.btn-primary.btn-block.btn-large(v-link="{name:'register'}") 点我注册
</template>

<script>
  import axios from 'axios'

export default {
  data () {
    return {}
  },
  ready(){
    var $cookie=this.$cookie
    document.getElementsByClassName('btn')[0].onclick=()=>{
      var form=document.getElementsByTagName('form')[0];
      axios.defaults.headers.common['Access-Control-Allow-Origin']="*";
      axios.defaults.headers.common["Content-Type"]="application/x-www-form-urlencoded";
      axios.post('http://121.201.13.36/login',{
        name:form.u.value,
        password:form.p.value
      })
        .then(function (response) {
          $cookie.set("token",response.data.token,7)
          window.location='#!/';
        })
        .catch(function (error) {
          console.log(error);
        });
      return false;
    }
  }
}
</script>

<style lang="scss" scoped>
  .btn { display: inline-block; *display: inline; *zoom: 1; padding: 4px 10px 4px; margin-bottom: 0; font-size: 13px; line-height: 18px; color: #333333; text-align: center; -webkit-border-radius: 4px; -moz-border-radius: 4px; border-radius: 4px; -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05); -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05); box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05); cursor: pointer; *margin-left: .3em; }
  .btn-block { width: 48%; float: left;margin-right: 2%; display:block; margin-top: 20px}

  * { -webkit-box-sizing:border-box; -moz-box-sizing:border-box; -ms-box-sizing:border-box; -o-box-sizing:border-box; box-sizing:border-box; }

  .login {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -150px 0 0 -150px;
    width:300px;
    height:300px;
    min-width: 300px;
  }
  .login h1 { color: black; text-shadow: 0 0 10px rgba(0,0,0,0.3); letter-spacing:1px; text-align:center; margin-bottom: 20px }

  input {
    width: 100%;
    margin-bottom: 10px;
    background: rgba(255,255,255,0.3);
    outline: none;
    padding: 10px;
    font-size: 13px;
    color: black;
    text-shadow: 1px 1px 1px rgba(255,255,255,0.5);
    border: 1px solid rgba(255,255,255,0.5);
    border-radius: 4px;
    box-shadow: inset 0 -5px 10px rgba(100,100,100,0.2), 0 1px 1px rgba(255,255,255,0.2);
    -webkit-transition: box-shadow .5s ease;
    -moz-transition: box-shadow .5s ease;
    -o-transition: box-shadow .5s ease;
    -ms-transition: box-shadow .5s ease;
    transition: box-shadow .5s ease;
  }
  input:focus { box-shadow: inset 0 -5px 45px rgba(100,100,100,0.4), 0 1px 1px rgba(255,255,255,0.2); }


</style>
