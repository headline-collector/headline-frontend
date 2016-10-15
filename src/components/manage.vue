<template lang="pug">
div.manage
  h1 订阅列表
  ul.manage-page
    li.page-item(v-for="item in watches")
      div.item-name {{item}}
      div.item-delete(@click="onClick",item-id="{{item}}") 删除
  h1 推荐列表
  div.page-list(v-for="item in list")
    h2 For {{item.tag}}
    ul.all-page
    li.page-item(v-for="item in item.sites" v-if="!watches.includes(item)")
        div.item-name {{item}}
        div.item-add(@click="onAdd",item-id="{{item}}") 添加
</template>

<script>
  import axios from 'axios'
  import $cookie from 'vue-cookie'
export default {
  data () {
    var $cookie = this.$cookie;
    var _this=this;
    axios.defaults.headers.common['Access-Control-Allow-Origin']="*";
    axios.defaults.headers.common["Content-Type"]="application/x-www-form-urlencoded";
    axios.post('http://10.221.64.248:3000/watchlist/',{
      token:$cookie.get("token")
    })
      .then(function (response) {
        _this.$set("watches",response.data.watches);
      })
      .catch(function (error) {
        console.log(error);
        alert("服务器错误");
      });

    axios.defaults.headers.common['Access-Control-Allow-Origin']="*";
    axios.defaults.headers.common["Content-Type"]="application/x-www-form-urlencoded";
    axios.get('http://10.221.64.248:3000/sitelist/',{
      token:$cookie.get("token")
    })
      .then(function (response) {
        var result = response.data;
        console.log(result);
        _this.$set("list",result)
      })
      .catch(function (error) {
        console.log(error);
        alert("服务器错误");
      });

    return {
      watches:[],
      list:[]
    }
  },
  ready(){
  },
  methods:{
    onClick: (event)=>{
      axios.defaults.headers.common['Access-Control-Allow-Origin']="*";
      axios.defaults.headers.common["Content-Type"]="application/x-www-form-urlencoded";
      console.log(event.target.getAttribute("item-id"));
      axios.post('http://10.221.64.248:3000/unwatch/'+event.target.getAttribute("item-id"),{
        token:$cookie.get("token")
      })
        .then(function (response) {
          location.reload(true)
        })
        .catch(function (error) {
          console.log(error);
          alert("服务器错误");
        });

    },
    onAdd: (event)=>{
      axios.defaults.headers.common['Access-Control-Allow-Origin']="*";
      axios.defaults.headers.common["Content-Type"]="application/x-www-form-urlencoded";
      console.log(event.target.getAttribute("item-id"));
      axios.post('http://10.221.64.248:3000/watch/'+event.target.getAttribute("item-id"),{
        token:$cookie.get("token")
      })
        .then(function (response) {
          location.reload(true)
        })
        .catch(function (error) {
          console.log(error);
          alert("服务器错误");
        });

    },
  }
}
</script>

<style lang="scss" scoped>
.item-name{
  float: left;
  margin: 0 15px;
}
  .item-delete{
    float:right;
    width: 50px;
    height: 30px;
    background: red;
    opacity: .75;
    text-align: center;
    color: white;
    cursor: pointer;
  }

.item-add{
  float:right;
  width: 50px;
  height: 30px;
  background: limegreen;
  opacity: .75;
  text-align: center;
  color: white;
  cursor: pointer;
}

  .page-item{
    width: 35%;
    height: 30px;
    background: white;
    margin: 10px auto;
    opacity: .9;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    -moz-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }

h1,h2 { color: black; text-shadow: 0 0 10px rgba(0,0,0,0.3); letter-spacing:1px; text-align:center; }

  h2{
    font-size: 15px;
  }
</style>
