import{a as p}from"./axios-G2rPRu76.js";import{_ as U,o as d,c as n,a as t,h as v,i as g,F as f,e as w,t as h,w as r,v as u,j as V,g as C,r as k,d as y}from"./index-nbSx67QQ.js";import{M as D}from"./bootstrap.esm-TTjMTX3M.js";import{D as I}from"./DelProductModal-8BpRnukm.js";const E={props:["pages"],methods:{updatePage(l){this.$emit("emitPages",l)}}},T={"aria-label":"Page navigation example"},$={class:"pagination"},L=t("span",{"aria-hidden":"true"},"«",-1),N=[L],R=["onClick"],A=t("span",{"aria-hidden":"true"},"»",-1),O=[A];function S(l,e,i,M,o,a){return d(),n("nav",T,[t("ul",$,[t("li",{class:v(["page-item",{disabled:!i.pages.has_pre}])},[t("a",{class:"page-link","aria-label":"Previous",onClick:e[0]||(e[0]=g(s=>a.updatePage(i.pages.current_page-1),["prevent"]))},N)],2),(d(!0),n(f,null,w(i.pages.total_pages,s=>(d(),n("li",{class:v(["page-item",{active:s===i.pages.current_page}]),key:s+123},[t("a",{class:"page-link",onClick:g(m=>a.updatePage(s),["prevent"])},h(s),9,R)],2))),128)),t("li",{class:v(["page-item",{disabled:!i.pages.has_next}])},[t("a",{class:"page-link","aria-label":"Next",onClick:e[1]||(e[1]=g(s=>a.updatePage(i.pages.current_page+1),["prevent"]))},O)],2)])])}const B=U(E,[["render",S]]);var H={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"reirei",BASE_URL:"/week7_npm_vite/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:F,VITE_PATH:z}=H,j={data(){return{prodModal:null,emitProduct:{}}},props:["tempProducts","addProduct","addImg","isNew"],methods:{modelOpen(){this.prodModal.show()},modalClose(){this.prodModal.hide()},uploadPhotos(){const l=this.$refs.fileInput.files[0],e=new FormData;e.append("file-to-upload",l),p.post(`${F}/api/${z}/admin/upload`,e).then(i=>{this.emitProduct.imageUrl=i.data.imageUrl,this.$refs.fileInput.value=""}).catch(i=>{alert(i.response.data.message)})}},mounted(){this.prodModal=new D(this.$refs.productModal),this.emitProduct=this.tempProducts},watch:{tempProducts(){this.emitProduct=this.tempProducts}}},q={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},G={class:"modal-dialog modal-xl"},J={class:"modal-content border-0"},K={class:"modal-header bg-dark text-white"},Q={id:"productModalLabel",class:"modal-title"},W={key:0},X={key:1},Y=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Z={class:"modal-body"},tt={class:"row"},et={class:"col-sm-4"},ot={class:"mb-3"},st=t("label",{for:"imageUrl",class:"form-label"},"主要圖片",-1),lt={class:"mb-3"},it=t("label",{for:"file",class:"form-label"},[C("上傳圖片 "),t("i",{class:"fas fa-spinner fa-spin"})],-1),dt=["src","alt"],nt=t("h3",{class:"mb-3"},"新增多圖",-1),at={class:"mb-3"},rt=t("label",{for:"imageUrl",class:"form-label"},"圖片網址",-1),ct=["onUpdate:modelValue"],ut=["src"],mt={class:"col-sm-8"},pt={class:"mb-3"},_t=t("label",{for:"title",class:"form-label"},"標題",-1),ht={class:"row"},bt={class:"mb-3 col-md-6"},gt=t("label",{for:"category",class:"form-label"},"分類",-1),ft={class:"mb-3 col-md-6"},Pt=t("label",{for:"unit",class:"form-label"},"單位",-1),vt={class:"row"},kt={class:"mb-3 col-md-6"},yt=t("label",{for:"origin_price",class:"form-label"},"原價",-1),Ut={class:"mb-3 col-md-6"},wt=t("label",{for:"price",class:"form-label"},"售價",-1),Mt=t("hr",null,null,-1),xt={class:"mb-3"},Vt=t("label",{for:"description",class:"form-label"},"產品描述",-1),Ct={class:"mb-3"},Dt=t("label",{for:"content",class:"form-label"},"說明內容",-1),It={class:"mb-3"},Et={class:"form-check"},Tt=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),$t={class:"modal-footer"},Lt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Nt(l,e,i,M,o,a){return d(),n("div",q,[t("div",G,[t("div",J,[t("div",K,[t("h5",Q,[i.isNew?(d(),n("span",W,"新增產品")):(d(),n("span",X,"編輯產品"))]),Y]),t("div",Z,[t("div",tt,[t("div",et,[t("div",ot,[st,r(t("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>o.emitProduct.imageUrl=s),id:"imageUrl",type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,512),[[u,o.emitProduct.imageUrl]])]),t("div",lt,[it,t("input",{type:"file",class:"form-control mb-4",id:"file",ref:"fileInput",onChange:e[1]||(e[1]=(...s)=>a.uploadPhotos&&a.uploadPhotos(...s))},null,544)]),t("img",{class:"img-fluid",src:o.emitProduct.imageUrl,alt:o.emitProduct.imageUrl},null,8,dt),nt,Array.isArray(o.emitProduct.imagesUrl)?(d(),n(f,{key:0},[(d(!0),n(f,null,w(o.emitProduct.imagesUrl,(s,m)=>(d(),n("div",{class:"mb-1",key:m},[t("div",at,[rt,r(t("input",{type:"text","onUpdate:modelValue":P=>o.emitProduct.imagesUrl[m]=P,class:"form-control",placeholder:"請輸入圖片連結"},null,8,ct),[[u,o.emitProduct.imagesUrl[m]]])]),t("img",{src:s,alt:"img",class:"img-fluid"},null,8,ut)]))),128)),!o.emitProduct.imagesUrl.length||o.emitProduct.imagesUrl[o.emitProduct.imagesUrl-1]?(d(),n("button",{key:0,class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[2]||(e[2]=s=>o.emitProduct.imagesUrl.push(""))},"新增圖片 ")):(d(),n("button",{key:1,class:"btn btn-outline-danger btn-sm d-block w-100",onClick:e[3]||(e[3]=s=>o.emitProduct.imagesUrl.pop())}," 刪除圖片 "))],64)):(d(),n("button",{key:1,class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[4]||(e[4]=(...s)=>i.addImg&&i.addImg(...s))},"新增圖片 "))]),t("div",mt,[t("div",pt,[_t,r(t("input",{"onUpdate:modelValue":e[5]||(e[5]=s=>o.emitProduct.title=s),id:"title",type:"text",class:"form-control",placeholder:"請輸入標題"},null,512),[[u,o.emitProduct.title]])]),t("div",ht,[t("div",bt,[gt,r(t("input",{"onUpdate:modelValue":e[6]||(e[6]=s=>o.emitProduct.category=s),id:"category",type:"text",class:"form-control",placeholder:"請輸入分類"},null,512),[[u,o.emitProduct.category]])]),t("div",ft,[Pt,r(t("input",{"onUpdate:modelValue":e[7]||(e[7]=s=>o.emitProduct.unit=s),id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位"},null,512),[[u,o.emitProduct.unit]])])]),t("div",vt,[t("div",kt,[yt,r(t("input",{"onUpdate:modelValue":e[8]||(e[8]=s=>o.emitProduct.origin_price=s),id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價"},null,512),[[u,o.emitProduct.origin_price,void 0,{number:!0}]])]),t("div",Ut,[wt,r(t("input",{"onUpdate:modelValue":e[9]||(e[9]=s=>o.emitProduct.price=s),id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價"},null,512),[[u,o.emitProduct.price,void 0,{number:!0}]])])]),Mt,t("div",xt,[Vt,r(t("textarea",{"onUpdate:modelValue":e[10]||(e[10]=s=>o.emitProduct.description=s),id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述"},`\r
                `,512),[[u,o.emitProduct.description]])]),t("div",Ct,[Dt,r(t("textarea",{"onUpdate:modelValue":e[11]||(e[11]=s=>o.emitProduct.content=s),id:"description",type:"text",class:"form-control",placeholder:"請輸入說明內容"},`\r
                `,512),[[u,o.emitProduct.content]])]),t("div",It,[t("div",Et,[r(t("input",{"onUpdate:modelValue":e[12]||(e[12]=s=>o.emitProduct.is_enabled=s),id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0},null,512),[[V,o.emitProduct.is_enabled]]),Tt])])])])]),t("div",$t,[Lt,t("button",{type:"button",class:"btn btn-primary",onClick:e[13]||(e[13]=g((...s)=>i.addProduct&&i.addProduct(...s),["prevent"]))}," 確認 ")])])])],512)}const Rt=U(j,[["render",Nt]]);var At={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"reirei",BASE_URL:"/week7_npm_vite/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:_,VITE_PATH:b}=At,Ot={data(){return{prodModal:null,delModal:null,products:[],pages:{},isNew:!1,tempProducts:{imagesUrl:[]}}},methods:{cheakLongin(){p.post(`${_}/api/user/check`).then(l=>{this.getData()}).catch(l=>{alert(l.response.data.message),this.$router.push("/login")})},getData(l=1){p.get(`${_}/api/${b}/admin/products?page=${l}`).then(e=>{this.products=e.data.products,this.pages=e.data.pagination}).catch(e=>{alert(e.response.data.message)})},openModel(l,e){l==="new"?(this.tempProducts={imagesUrl:[]},this.isNew=!0,this.$refs.pduct.modelOpen()):l==="edit"?(this.isNew=!1,this.tempProducts={...e},this.$refs.pduct.modelOpen()):l==="delet"&&(this.tempProducts={...e},this.$refs.deModal.modelOpen())},delProduct(){p.delete(`${_}/api/${b}/admin/product/${this.tempProducts.id}`).then(l=>{alert(l.data.message),this.$refs.deModal.modalClose(),this.getData()}).catch(l=>{alert(l.response.data.message)})},addProduct(){let l=`${_}/api/${b}/admin/product`,e="post";this.isNew||(l=`${_}/api/${b}/admin/product/${this.tempProducts.id}`,e="put"),p[e](l,{data:this.tempProducts}).then(i=>{alert(i.data.message),this.$refs.pduct.modalClose(),this.getData()}).catch(i=>{alert(i.response.data.message)})},addImg(){this.tempProducts.imagesUrl=[],this.tempProducts.imagesUrl.push("")}},mounted(){const l=document.cookie.replace(/(?:(?:^|.*;\s*)kawaToken\s*=\s*([^;]*).*$)|^.*$/,"$1");p.defaults.headers.common.Authorization=l,this.cheakLongin()},components:{PaginationModal:B,ProductModal:Rt,DelProductModal:I}},St={class:"container"},Bt={class:"text-end mt-4"},Ht={class:"table mt-4"},Ft=t("thead",null,[t("tr",null,[t("th",{width:"120"}," 分類 "),t("th",null,"產品名稱"),t("th",{width:"120"}," 原價 "),t("th",{width:"120"}," 售價 "),t("th",{width:"100"}," 是否啟用 "),t("th",{width:"120"}," 編輯 ")])],-1),zt={key:0,class:"text-success"},jt={key:1},qt={class:"btn-group"},Gt=["onClick"],Jt=["onClick"];function Kt(l,e,i,M,o,a){const s=k("PaginationModal"),m=k("ProductModal"),P=k("DelProductModal");return d(),n("div",St,[t("div",Bt,[t("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=c=>a.openModel("new"))}," 建立新的產品 ")]),t("table",Ht,[Ft,t("tbody",null,[(d(!0),n(f,null,w(o.products,c=>(d(),n("tr",{key:c.id},[t("td",null,h(c.category),1),t("td",null,h(c.title),1),t("td",null,h(c.origin_price),1),t("td",null,h(c.price),1),t("td",null,[c.is_enabled?(d(),n("span",zt,"啟用")):(d(),n("span",jt,"未啟用"))]),t("td",null,[t("div",qt,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:x=>a.openModel("edit",c)}," 編輯 ",8,Gt),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:x=>a.openModel("delet",c)}," 刪除 ",8,Jt)])])]))),128))])]),y(s,{pages:o.pages,onEmitPages:a.getData},null,8,["pages","onEmitPages"]),y(m,{"temp-products":o.tempProducts,"add-product":a.addProduct,"is-new":o.isNew,"add-img":a.addImg,ref:"pduct"},null,8,["temp-products","add-product","is-new","add-img"]),y(P,{"temp-products":o.tempProducts,onDelItem:a.delProduct,ref:"deModal"},null,8,["temp-products","onDelItem"])])}const Zt=U(Ot,[["render",Kt]]);export{Zt as default};
