import{a as p}from"./axios-G2rPRu76.js";import{_ as y,o,c as d,a as e,h as g,i as f,F as _,e as b,t as r,b as M,w as $,j as D,r as O,d as k}from"./index-nbSx67QQ.js";import{M as C}from"./bootstrap.esm-TTjMTX3M.js";import{D as P}from"./DelProductModal-8BpRnukm.js";const S={props:["pages"],methods:{updatePage(t){this.$emit("emitPages",t)}}},E={"aria-label":"Page navigation example"},N={class:"pagination"},V=e("span",{"aria-hidden":"true"},"«",-1),L=[V],I=["onClick"],T=e("span",{"aria-hidden":"true"},"»",-1),A=[T];function U(t,s,n,u,a,i){return o(),d("nav",E,[e("ul",N,[e("li",{class:g(["page-item",{disabled:!n.pages.has_pre}])},[e("a",{class:"page-link","aria-label":"Previous",onClick:s[0]||(s[0]=f(l=>i.updatePage(n.pages.current_page-1),["prevent"]))},L)],2),(o(!0),d(_,null,b(n.pages.total_pages,l=>(o(),d("li",{class:g(["page-item",{active:l===n.pages.current_page}]),key:l+123},[e("a",{class:"page-link",onClick:f(w=>i.updatePage(l),["prevent"])},r(l),9,I)],2))),128)),e("li",{class:g(["page-item",{disabled:!n.pages.has_next}])},[e("a",{class:"page-link","aria-label":"Next",onClick:s[1]||(s[1]=f(l=>i.updatePage(n.pages.current_page+1),["prevent"]))},A)],2)])])}const R=y(S,[["render",U]]),B={data(){return{orderModal:null,emitOrder:{},is_paid:!1}},props:["tempOrder","isNew","addOrderStates"],emits:["addOrderStates"],methods:{modelOpen(){this.orderModal.show()},modalClose(){this.orderModal.hide()},currency(t){return`${parseInt(t,10).toFixed(0).replace(/./g,(n,u,a)=>u&&n!=="."&&(a.length-u)%3===0?`, ${n}`.replace(/\s/g,""):n)}`},date(t){return new Date(t*1e3).toLocaleDateString()}},mounted(){this.orderModal=new C(this.$refs.orderModal),this.emitOrder=this.tempOrder},watch:{tempOrder(){this.emitOrder=this.tempOrder}}},F={id:"orderModal",ref:"orderModal",class:"modal fade",tabindex:"-1","aria-labelledby":"orderModalLabel","aria-hidden":"true"},j={class:"modal-dialog modal-dialog-centered modal-dialog-scrollable"},z={class:"modal-content border-0"},H=e("div",{class:"modal-header bg-dark text-white"},[e("h5",{id:"orderModalLabel",class:"modal-title"},[e("span",null,"訂單細節")]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),q={class:"modal-body"},G={class:"row"},J={class:"col-md-16"},K=e("h3",null,"訂單資料",-1),Q={class:"table"},W={key:0},X=e("th",{style:{width:"100px"}},"訂單編號",-1),Y=e("th",null,"訂單時間",-1),Z=e("th",{style:{width:"100px"}},"收件人",-1),ee=e("th",null,"Email",-1),te=e("th",null,"聯絡電話",-1),se=e("th",null,"收件地址",-1),ae=e("th",null,"付款狀態",-1),oe={key:0},de={key:1},le=e("th",null,"總金額",-1),re=e("h3",null,"選購商品",-1),ne={class:"table"},ie=e("thead",null,[e("tr")],-1),ce={class:"d-flex justify-content-end"},he={class:"form-check"},_e={class:"form-check-label",for:"flexCheckDefault"},ue={key:0},pe={key:1},me={class:"modal-footer"},ge=e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function be(t,s,n,u,a,i){return o(),d("div",F,[e("div",j,[e("div",z,[H,e("div",q,[e("div",G,[e("div",J,[K,e("table",Q,[a.emitOrder.user?(o(),d("tbody",W,[e("tr",null,[X,e("td",null,r(a.emitOrder.id),1)]),e("tr",null,[Y,e("td",null,r(i.date(a.emitOrder.create_at)),1)]),e("tr",null,[Z,e("td",null,r(a.emitOrder.user.name),1)]),e("tr",null,[ee,e("td",null,r(a.emitOrder.user.email),1)]),e("tr",null,[te,e("td",null,r(a.emitOrder.user.tel),1)]),e("tr",null,[se,e("td",null,r(a.emitOrder.user.address),1)]),e("tr",null,[ae,e("td",null,[a.emitOrder.paid_date?(o(),d("span",oe,"已付款")):(o(),d("span",de,"尚未付款"))])]),e("tr",null,[le,e("td",null,"$"+r(a.emitOrder.total),1)])])):M("",!0)]),re,e("table",ne,[ie,e("tbody",null,[(o(!0),d(_,null,b(a.emitOrder.products,l=>(o(),d("tr",{key:l.id},[e("th",null,r(l.product.title),1),e("td",null,r(l.qty)+" / "+r(l.product.unit),1),e("td",null,r(l.product.final_total),1),e("td",null,r(i.currency(l.final_total)),1)]))),128))])]),e("div",ce,[e("div",he,[$(e("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":s[0]||(s[0]=l=>a.emitOrder.is_paid=l)},null,512),[[D,a.emitOrder.is_paid]]),e("label",_e,[a.emitOrder.is_paid?(o(),d("span",ue,"已付款")):(o(),d("span",pe,"未付款"))])])])])])]),e("div",me,[ge,e("button",{type:"button",class:"btn btn-primary",onClick:s[1]||(s[1]=l=>t.$emit("addOrderStates",a.emitOrder))}," 修改狀態 ")])])])],512)}const fe=y(B,[["render",be]]);var Oe={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"reirei",BASE_URL:"/week7_npm_vite/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:m,VITE_PATH:v}=Oe,ke={data(){return{pagination:{},orderData:{},tempOrder:{},pages:1,isNew:!1}},methods:{cheakLongin(){p.post(`${m}/api/user/check`).then(t=>{this.getOrders()}).catch(t=>{alert(t.response.data.message),this.$router.push("/login")})},getOrders(t=1){p.get(`${m}/api/${v}/admin/orders?page=${t}`).then(s=>{this.orderData=s.data.orders,this.page=s.data.pagination,console.log(this.orderData)}).catch(s=>{alert(s.response.data.message)})},openModel(t,s){this.isNew=!0,t==="look"?(this.isNew=!1,this.tempOrder={...s},this.$refs.orderModal.modelOpen()):t==="dele"&&(this.tempOrder={...s},this.$refs.deModal.modelOpen())},addOrderStates(t){this.isNew=!0;const s={is_paid:t.is_paid};p.put(`${m}/api/${v}/admin/order/${t.id}`,{data:s}).then(n=>{this.isNew=!1,alert(n.data.message),this.$refs.orderModal.modalClose(),this.getOrders()}).catch(n=>{alert(n.response.data.message)})},delOrder(){this.isNew=!0,p.delete(`${m}/api/${v}/admin/order/${this.tempOrder.id}`).then(t=>{this.isNew=!1,alert(t.data.message),this.$refs.deModal.modalClose(),this.getOrders()}).catch(t=>{alert(t.response.data.message)})},date(t){return new Date(t*1e3).toLocaleDateString()}},mounted(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)kawaToken\s*=\s*([^;]*).*$)|^.*$/,"$1");p.defaults.headers.common.Authorization=t,this.cheakLongin()},components:{PaginationModal:R,OrderModal:fe,DelProductModal:P}},ve={class:"container"},ye={class:"text-end mt-4"},we={class:"table mt-4"},Me=e("thead",null,[e("tr",null,[e("th",{width:"120"},"購買日期"),e("th",{width:"120"},"Email"),e("th",{width:"120"},"品項"),e("th",{width:"120"},"應付金額"),e("th",{width:"120"},"付款狀態"),e("th",{width:"120"},"編輯")])],-1),$e={class:"list-unstyled"},De={class:"form-check form-switch"},xe=["onUpdate:modelValue","id","onChange"],Ce=["for"],Pe={key:0},Se={key:1},Ee={class:"btn-group"},Ne=["onClick"],Ve=["onClick"];function Le(t,s,n,u,a,i){const l=O("PaginationModal"),w=O("OrderModal"),x=O("DelProductModal");return o(),d(_,null,[e("div",ve,[e("div",ye,[e("table",we,[Me,e("tbody",null,[(o(!0),d(_,null,b(a.orderData,c=>(o(),d(_,{key:c.id},[a.orderData.length?(o(),d("tr",{key:0,class:g({"text-secondary":!c.is_paid})},[e("td",null,r(i.date(c.create_at)),1),e("td",null,r(c.user.email),1),e("ul",$e,[(o(!0),d(_,null,b(c.products,h=>(o(),d("li",{key:h.id},r(h.product.title),1))),128))]),e("td",null,r(c.total),1),e("td",null,[e("div",De,[$(e("input",{class:"form-check-input","onUpdate:modelValue":h=>c.is_paid=h,type:"checkbox",role:"switch",id:`paidSwitch${c.id}`,onChange:h=>i.addOrderStates(c)},null,40,xe),[[D,c.is_paid]]),e("label",{class:"form-check-label",for:`paidSwitch${c.id}`},[c.is_paid?(o(),d("span",Pe,"已付款")):(o(),d("span",Se,"未付款"))],8,Ce)])]),e("div",Ee,[e("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:h=>i.openModel("look",c)}," 查看 ",8,Ne),e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:h=>i.openModel("dele",c)}," 刪除 ",8,Ve)])],2)):M("",!0)],64))),128))])])])]),k(l,{pages:a.pages,onEmitPages:i.getOrders},null,8,["pages","onEmitPages"]),k(w,{"temp-Order":a.tempOrder,ref:"orderModal",onAddOrderStates:i.addOrderStates},null,8,["temp-Order","onAddOrderStates"]),k(x,{item:a.tempOrder,onDelItem:i.delOrder,ref:"deModal"},null,8,["item","onDelItem"])],64)}const Re=y(ke,[["render",Le]]);export{Re as default};
