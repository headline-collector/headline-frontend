<template lang="pug">
ul.index
  h1 WebSite Headline
  img.logo(src="../assets/logo.png")
  div.cl
    div
      h3(@click="datePlus") Next Day
      h2#time {{date.toISOString().slice(0,10)}}
      h3(@click="dateMinus") Last Day
  li.page-container(v-for="page in headlines")
    div.page-title(id="{{page.site}}")
      | {{page.site}}
    div.page-list
      ol.page-item(v-for="item in page.headlines")
        a(href="{{item.url}}") {{item.title}}
  ul.page-guide
    li.guide-title guide
    li.guide-item(v-for="page in headlines")
      div(@click="onClick",to="{{page.site}}") {{page.site}}
</template>

<script>
  import axios from 'axios'
export default {
    before(){

    },
  data () {
    var __this = this;
    var $cookie = this.$cookie;
    var result;
    axios.defaults.headers.common['Access-Control-Allow-Origin']="*";
    axios.defaults.headers.common["Content-Type"]="application/x-www-form-urlencoded";
    var date = new Date();
    axios.post('http://121.201.13.36/dailyHeadlines/'+date.toISOString().slice(0,10),{
      token:$cookie.get("token")
    })
      .then(function (response) {
        result = response.data.headlines;
        __this.$set("headlines",result);
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log(result);
    return {
      headlines:[],
      date: new Date()
    }
  },
  ready(){
  },
  methods: {
    onClick: (event) => {
      var id=event.target.getAttribute("to");
      console.log(id);
      var t=document.getElementById(id);
      window.scrollTo(t.offsetTop,t.offsetTop);
    },
    datePlus(e){
      var tomorrow = this.date;
      tomorrow.setDate(tomorrow.getDate() + 1);
      this.$set('date',tomorrow)
      console.log(this.date)
      this.getDateMsg(this.date)
      document.getElementById('time').innerHTML=this.date.toISOString().slice(0,10);
    },
    dateMinus(e){
      var tomorrow = this.date;
      tomorrow.setDate(tomorrow.getDate() - 1);
      this.$set('date',tomorrow)
      console.log(this.date)
      this.getDateMsg(this.date)
      document.getElementById('time').innerHTML=this.date.toISOString().slice(0,10);
    },
    getDateMsg(date){
      var $cookie = this.$cookie;
      var __this=this;
      var result;
      axios.defaults.headers.common['Access-Control-Allow-Origin']="*";
      axios.defaults.headers.common["Content-Type"]="application/x-www-form-urlencoded";
      axios.post('http://121.201.13.36/dailyHeadlines/'+date.toISOString().slice(0,10),{
        token:$cookie.get("token")
      })
        .then(function (response) {
          result = response.data.headlines;
          __this.$set("headlines",result);
          __this.$set("date",date)
        })
        .catch(function (error) {
          console.log(error);
        });

    }
  }
}
</script>

<style lang="scss" scoped>
.page-container{
  width: 45%;
  margin: 20px auto;
}

h3{
  cursor: pointer;
  color: #091220;
}

.index h1,h2,h3 { color: black; text-shadow: 0 0 10px rgba(0,0,0,0.3); letter-spacing:1px; text-align:center; margin-bottom: 20px}


.page-list{
    opacity: 0.95;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    -moz-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    background:  rgba(255,255,255,0.2);
    width: 100%;
    height: auto;
    ol{
      margin-left: auto;
      margin-right:auto ;
      padding: 5px auto;
      width: 100%;
      display: inline-table;
      line-height: 30px;
      border-bottom: dashed gray 1px;
      &:hover{
        border-bottom: solid gray 2px;
      }
      background: rgba(255,255,255,0.2);
      opacity: .9;
      text-align-all: left;
    }
    a{
      float: left;
      margin-left: 10px;
      color: black;
      text-shadow: 0 0 10px rgba(0,0,0,0.3); letter-spacing:1px;
      width: 450px;
    }
  }

  .page-guide{
    position: fixed;
    left: 40px;
    top: 150px;
    cursor: pointer;
    opacity: 0.95;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    -moz-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    background:  rgba(255,255,255,0.2);
    width: auto;
    padding: 10px;
    color: black; text-shadow: 0 0 10px rgba(0,0,0,0.3); letter-spacing:1px; text-align:center; margin-bottom: 20px
  }

  .page-container{
    padding: 10px;
  }

  .item-num{
    width: 30px;
    height: auto;
    text-align: center;
    float: left;
  }

  .page-title{
    background-color: rgba(185, 185, 185, 0.5);
    margin: 0 auto;
    width: auto;
    text-align: center;
    height: 50px;
    font-size: 30px;
    line-height: 50px;
    color: black;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    -moz-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }

  .guide-title{
    background-color: rgba(185, 185, 185, 0.5);
    margin: 0 auto;
    text-align: center;
    height: 20px;
    line-height: 20px;
    width: 108px;
    color: black;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    -moz-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }

  .guide-item{
    height: auto;
    min-width: 108px;
    line-height: 35px;
  }

  img.logo{
    width: 128px;
    height: 128px;
    position: fixed;
    left: 40px;
    top: 10px;
  }
</style>
