(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["PartakePledge"],{b7c8:function(t,n,e){"use strict";e("ddaf")},ddaf:function(t,n,e){},e965:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("van-overlay",{staticClass:"board-lockout",attrs:{show:t.show},on:{click:function(n){t.show=!1}}},[a("div",{staticClass:"container",on:{click:function(t){t.stopPropagation()}}},[a("div",{staticClass:"lp-info"},[a("div",[a("img",{attrs:{src:e("0317")}}),a("div",[a("span",[t._v("PIN-CS/LP")]),a("span",[t._v(t._s(t.balance.toFixed(6)))])])]),a("router-link",{attrs:{to:""},nativeOn:{click:function(n){return t.getLP(n)}}},[t._v(t._s(t.$t("boardLockout.text1")))])],1),a("span",{staticClass:"title"},[t._v(t._s(t.$t("boardLockout.text2")))]),a("div",{staticClass:"input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],attrs:{type:"number"},domProps:{value:t.amount},on:{input:[function(n){n.target.composing||(t.amount=n.target.value)},t.input]}}),a("van-button",{on:{click:function(n){t.amount=t.balance}}},[t._v(t._s(t.$t("boardLockout.text3")))])],1),a("div",{staticClass:"buttons"},[a("van-button",{class:0===t.type?"active":"",on:{click:function(n){return t.switchType(0)}}},[t._v(t._s(t.$t("boardLockout.text4")))]),a("van-button",{class:1===t.type?"active":"",on:{click:function(n){return t.switchType(1)}}},[t._v(t._s(t.$t("boardLockout.text5")))]),a("van-button",{class:2===t.type?"active":"",on:{click:function(n){return t.switchType(2)}}},[t._v(t._s(t.$t("boardLockout.text6")))])],1),a("span",{staticClass:"note"},[t._v(t._s(t.noteText))]),a("div",{staticClass:"get-power"},[a("span",[t._v(t._s(t.$t("boardLockout.text8")))]),a("span",[t._v(t._s(t.power))])]),a("van-button",{on:{click:t.doPledge}},[t._v(t._s(t.$t("boardLockout.text9")))])],1)])},o=[],s=(e("a9e3"),e("b680"),e("96cf"),e("1da1")),i={data:function(){return{balance:0,amount:"",type:0,power:0,allowance:0,show:!1,inputing:!1}},computed:{noteText:function(){var t=[30,60,90];return this.$t("boardLockout.text7",{number:t[this.type]})}},created:function(){this.$contracts&&this.init()},methods:{display:function(){this.show=!0},getLP:function(){location.href="https://pinswap.github.io/#/join-fund-pool"},init:function(){var t=this,n=new this.$web3.BatchRequest;n.add(this.$contracts.Pair.methods.balanceOf(this.$address).call.request({from:this.$address})),n.add(this.$contracts.Pair.methods.allowance(this.$address,this.$contracts.Shareholders._address).call.request({from:this.$address})),n.requestManager.sendBatch(n.requests,(function(n,e){n||(t.balance=("string"===typeof e[0]?e[0]:e[0].result).decode(["uint256"]).fromWei(),t.allowance=e[1].result.decode(["uint256"]).fromWei())}))},switchType:function(t){this.type=t,this.input()},input:function(){var t=this;if(Number(this.amount)<=0)return this.inputing=!1,this.power=0;if(this.inputing)return!1;this.inputing=!0;var n=setTimeout((function(){if(Number(t.amount)<=0)return t.inputing=!1,t.power=0,clearTimeout(n);t.$contracts.Shareholders.methods.powerOfLPAmount(t.type,t.amount.toWei()).call({from:t.$address},(function(e,a){e||(t.power=a,t.inputing=!1,clearTimeout(n))}))}),1e3)},approve:function(){var t=this,n=this.$contracts.Pair.methods.approve(this.$contracts.Shareholders._address,this.amount.toBN().times(10).toFixed().toWei());n.call({from:this.$address},(function(e,a){e||n.send({from:t.$address}).on("transactionHash",(function(n){vant.Toast.loading({message:t.$t("transaction.text7"),forbidClick:!0,duration:0,loadingType:"spinner"})})).on("receipt",function(){var n=Object(s["a"])(regeneratorRuntime.mark((function n(e){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$contracts.Pair.methods.allowance(t.$address,t.$contracts.Shareholders._address).call({from:t.$address});case 2:t.allowance=n.sent.fromWei(),vant.Toast.clear(),vant.Toast.success(t.$t("pledge.text10")),t.doPledge();case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()).on("error",(function(n){vant.Toast.clear(),vant.Toast.fail(t.$t("transaction.text13"))}))}))},doPledge:function(){var t=this;if(Number(this.amount)<.1)return vant.Toast.fail(this.$t("boardLockout.text10"));if(Number(this.amount)>Number(this.balance))return vant.Toast.fail(this.$t("boardLockout.text11"));if(Number(this.amount)>Number(this.allowance))return this.approve();var n=this.$contracts.Shareholders.methods.doPledge(this.type,this.amount.toWei());n.call({from:this.$address},(function(e,a){!e&&a&&n.send({from:t.$address}).on("transactionHash",(function(n){vant.Toast.loading({message:t.$t("transaction.text7"),forbidClick:!0,duration:0,loadingType:"spinner"})})).on("receipt",(function(n){vant.Toast.clear(),t.init(),t.amount="",vant.Toast.success(t.$t("boardLockout.text12")),t.show=!1,t.$emit("reload")})).on("error",(function(n){vant.Toast.clear(),vant.Toast.fail(t.$t("transaction.text13"))}))}))}}},r=i,c=r,u=(e("b7c8"),e("2877")),d=Object(u["a"])(c,a,o,!1,null,"18e6040c",null);n["default"]=d.exports}}]);