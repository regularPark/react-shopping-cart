"use strict";(self.webpackChunkreact_shopping_cart=self.webpackChunkreact_shopping_cart||[]).push([[850],{"./src/stories/components/QuantityInput.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{QuantityInput:function(){return QuantityInput},__namedExportsOrder:function(){return __namedExportsOrder}});var _templateObject,_QuantityInput$parame,_QuantityInput$parame2,_QuantityInput$parame3,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),_components_QuantityInput__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/QuantityInput.tsx"),recoil__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/recoil/es/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_hooks_useHandleProduct__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/hooks/useHandleProduct.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={component:_components_QuantityInput__WEBPACK_IMPORTED_MODULE_0__.Z,title:"Components/QuantityInput",tags:["autodocs"],decorators:[function(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(recoil__WEBPACK_IMPORTED_MODULE_1__.Wh,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(S.StoryWrapper,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Story,{})})})}],args:{id:"1",value:1,onChange:function onChange(){},onIncrement:function onIncrement(){},onDecrement:function onDecrement(){},onBlur:function onBlur(){}},argTypes:{value:{control:!0,description:"수량을 나타냅니다."},onChange:{description:"수량의 변화를 감지하고 0~99 사이의 숫자만 입력되도록 합니다."},onIncrement:{description:"+버튼을 클릭하면 수량이 1씩 증가합니다."},onDecrement:{description:"-버튼을 클릭하면 수량이 1씩 감소합니다."},onBlur:{description:""}}};__webpack_exports__.default=meta;var QuantityInput=function QuantityInput(args){var _useHandleProduct=(0,_hooks_useHandleProduct__WEBPACK_IMPORTED_MODULE_2__.p)(args.id),newQuantity=_useHandleProduct.newQuantity,handleNumberInputChange=_useHandleProduct.handleNumberInputChange,handleIncreaseItem=_useHandleProduct.handleIncreaseItem,handleDecreaseItem=_useHandleProduct.handleDecreaseItem;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_QuantityInput__WEBPACK_IMPORTED_MODULE_0__.Z,{id:args.id,value:newQuantity,onChange:handleNumberInputChange,onIncrement:handleIncreaseItem,onDecrement:handleDecreaseItem})},S={StoryWrapper:styled_components__WEBPACK_IMPORTED_MODULE_4__.zo.div(_templateObject||(_templateObject=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__.Z)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    width: calc(100vw - 32vw);\n  "])))};QuantityInput.parameters=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({},QuantityInput.parameters),{},{docs:(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({},null===(_QuantityInput$parame=QuantityInput.parameters)||void 0===_QuantityInput$parame?void 0:_QuantityInput$parame.docs),{},{source:(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({originalSource:"(args: any) => {\n  const {\n    newQuantity,\n    handleNumberInputChange,\n    handleIncreaseItem,\n    handleDecreaseItem\n  } = useHandleProduct(args.id);\n  return <QuantityInputComponent id={args.id} value={newQuantity} onChange={handleNumberInputChange} onIncrement={handleIncreaseItem} onDecrement={handleDecreaseItem} />;\n}"},null===(_QuantityInput$parame2=QuantityInput.parameters)||void 0===_QuantityInput$parame2||null===(_QuantityInput$parame3=_QuantityInput$parame2.docs)||void 0===_QuantityInput$parame3?void 0:_QuantityInput$parame3.source)})});var __namedExportsOrder=["QuantityInput"];try{QuantityInput.displayName="QuantityInput",QuantityInput.__docgenInfo={description:"",displayName:"QuantityInput",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/components/QuantityInput.stories.tsx#QuantityInput"]={docgenInfo:QuantityInput.__docgenInfo,name:"QuantityInput",path:"src/stories/components/QuantityInput.stories.tsx#QuantityInput"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/QuantityInput.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _templateObject,_templateObject2,_templateObject3,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),_common_Input__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/common/Input.tsx"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_icons_fa__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-icons/fa/index.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),QuantityInput=function QuantityInput(_ref){var value=_ref.value,onChange=_ref.onChange,id=_ref.id,onIncrement=_ref.onIncrement,onDecrement=_ref.onDecrement,onBlur=_ref.onBlur;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(S.Wrapper,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(S.Button,{onClick:onDecrement,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.iFH,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_common_Input__WEBPACK_IMPORTED_MODULE_0__.Z,{id:id,type:"text",inputMode:"numeric",value:value,styled:QuantityInputStyle,onChange:onChange,onBlur:onBlur}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(S.Button,{onClick:onIncrement,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.wEH,{})})]})},S={Wrapper:styled_components__WEBPACK_IMPORTED_MODULE_3__.zo.div(_templateObject||(_templateObject=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.Z)(["\n    display: flex;\n    flex-direction: row;\n    & svg {\n      width: 16px;\n      height: 16px;\n      max-width: 26px;\n    }\n  "]))),Button:styled_components__WEBPACK_IMPORTED_MODULE_3__.zo.button(_templateObject2||(_templateObject2=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.Z)(["\n    height: 32px;\n    background: none;\n    margin: 0px;\n    padding: 3px;\n    border: 1px solid var(--gray-color-200);\n    cursor: pointer;\n  "])))},QuantityInputStyle=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(_templateObject3||(_templateObject3=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.Z)(["\n  width: 60px;\n  height: 32px;\n  font-size: 13px;\n  text-align: center;\n  color: var(--text-color);\n  border: 1px solid var(--gray-color-200);\n  border-width: 1px 0 1px 0;\n"])));__webpack_exports__.Z=QuantityInput;try{QuantityInput.displayName="QuantityInput",QuantityInput.__docgenInfo={description:"",displayName:"QuantityInput",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onIncrement:{defaultValue:null,description:"",name:"onIncrement",required:!0,type:{name:"MouseEventHandler<HTMLButtonElement>"}},onDecrement:{defaultValue:null,description:"",name:"onDecrement",required:!0,type:{name:"MouseEventHandler<HTMLButtonElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/QuantityInput.tsx#QuantityInput"]={docgenInfo:QuantityInput.__docgenInfo,name:"QuantityInput",path:"src/components/QuantityInput.tsx#QuantityInput"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Input.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _templateObject,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["autoComplete"],Input=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(_ref,ref){var _ref$autoComplete=_ref.autoComplete,autoComplete=void 0===_ref$autoComplete?"on":_ref$autoComplete,props=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(S.Input,(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref:ref},props),{},{autoComplete:autoComplete}))})),S={Input:styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.input(_templateObject||(_templateObject=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__.Z)(["\n    ","\n  "])),(function(props){return props.styled}))};__webpack_exports__.Z=Input;try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{autoComplete:{defaultValue:{value:"on"},description:"",name:"autoComplete",required:!1,type:{name:"string"}},styled:{defaultValue:null,description:"",name:"styled",required:!0,type:{name:"CSSProp"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/components/common/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"./src/constants/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{LR:function(){return NONE_QUANTITY},SM:function(){return NOT_NUMBER},mn:function(){return INITIAL_QUANTITY},zD:function(){return CART_ITEM_EXISTS}});var INITIAL_QUANTITY=1,NONE_QUANTITY=0,NOT_NUMBER=/[^0-9]/g,CART_ITEM_EXISTS=0},"./src/hooks/useHandleProduct.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{p:function(){return useHandleProduct}});var constants=__webpack_require__("./src/constants/index.ts"),es=__webpack_require__("./node_modules/recoil/es/index.js"),CartSelector=__webpack_require__("./src/store/CartSelector.ts"),validateQuantityInput=function validateQuantityInput(value){return value>=0&&value<=99},useHandleProduct=function useHandleProduct(id){var newQuantity=(0,es.sJ)((0,CartSelector.nS)({id:id})),updateCart=(0,es._8)((function(_ref){var set=_ref.set;return function(_ref2){var id=_ref2.id,quantity=_ref2.quantity;set((0,CartSelector.nS)({id:id,quantity:quantity}),0)}})),removeProductItemFromCart=(0,es._8)((function(_ref3){var set=_ref3.set;return function(id){set((0,CartSelector.mG)(id),[])}}));return{newQuantity:newQuantity,handleNumberInputChange:function handleNumberInputChange(_ref4){var value=_ref4.target.value;if("00"!==value||Number(value)!==constants.LR){var newQuantity=function changeInvalidValueToBlank(value,regex){return Number(value.replace(regex,"").slice(0,2))}(value,constants.SM);updateCart({id:id,quantity:newQuantity})}else removeProductItemFromCart(id)},handleIncreaseItem:function handleIncreaseItem(){var newValue=newQuantity+1;validateQuantityInput(newValue)&&updateCart({id:id,quantity:newValue})},handleDecreaseItem:function handleDecreaseItem(){var newValue=newQuantity-1;validateQuantityInput(newValue)&&(newValue!==constants.LR?updateCart({id:id,quantity:newValue}):removeProductItemFromCart(id))},handleDecreaseCartItem:function handleDecreaseCartItem(){if(1!==newQuantity){var newValue=newQuantity-1;validateQuantityInput(newValue)&&updateCart({id:id,quantity:newValue})}},handleCartClick:function handleCartClick(){updateCart({id:id,quantity:constants.mn})},handleBlurItem:function handleBlurItem(_ref5){"0"===_ref5.target.value&&removeProductItemFromCart(id)},removeFromCart:function removeFromCart(){removeProductItemFromCart(id)}}}},"./src/store/CartSelector.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{_u:function(){return cartBadgeSelector},S_:function(){return isSelectedProductSelector},mG:function(){return removeProductItemFromCartSelector},iH:function(){return totalPriceSelector},nS:function(){return updateCartSelector}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),es=__webpack_require__("./node_modules/recoil/es/index.js"),CartState=__webpack_require__("./src/store/CartState.ts"),constants=__webpack_require__("./src/constants/index.ts"),ProductListState=__webpack_require__("./src/store/ProductListState.ts"),setDataInLocalStorage=function setDataInLocalStorage(key,data){localStorage.setItem(key,JSON.stringify(data))},cartBadgeSelector=((0,es.CG)({key:"productFindByIdFamily",get:function get(id){return function(_ref){return(0,_ref.get)(CartState.d).find((function(item){return item.id===id}))}}}),(0,es.nZ)({key:"cartBadgeSelector",get:function get(_ref2){var cart=(0,_ref2.get)(CartState.d);return new Set(cart).size}})),isSelectedProductSelector=(0,es.CG)({key:"isSelectedProductSelector",get:function get(id){return function(_ref3){return(0,_ref3.get)(CartState.d).some((function(item){return item.id===id}))}}}),updateCartSelector=((0,es.CG)({key:"selectedProductSelector",get:function get(id){return function(_ref4){return(0,_ref4.get)(ProductListState.v).find((function(item){return item.id===id}))}}}),(0,es.CG)({key:"addToCartSelector",get:function get(_ref5){var id=_ref5.id;return function(_ref6){var product=(0,_ref6.get)(CartState.d).find((function(item){return item.id===id}));return product?product.quantity:constants.LR}},set:function set(_ref7){var id=_ref7.id,_ref7$quantity=_ref7.quantity,quantity=void 0===_ref7$quantity?0:_ref7$quantity;return function(_ref8){var get=_ref8.get,set=_ref8.set,cart=get(CartState.d),productList=get(ProductListState.v),cartItemIndex=cart.findIndex((function(item){return item.id===id})),updatedCart=cartItemIndex>=constants.zD?[].concat((0,toConsumableArray.Z)(cart.slice(0,cartItemIndex)),[(0,objectSpread2.Z)((0,objectSpread2.Z)({},cart[cartItemIndex]),{},{quantity:quantity})],(0,toConsumableArray.Z)(cart.slice(cartItemIndex+1))):[].concat((0,toConsumableArray.Z)(cart),[{id:id,quantity:quantity,product:productList.find((function(item){return item.id===id}))}]);setDataInLocalStorage("cart",cart),set(CartState.d,updatedCart)}}})),removeProductItemFromCartSelector=(0,es.CG)({key:"removeProductItemFromCartSelector",get:function get(){return function(_ref9){return(0,_ref9.get)(CartState.d)}},set:function set(id){return function(_ref10){var get=_ref10.get,set=_ref10.set,cart=get(CartState.d);if(cart.findIndex((function(item){return item.id===id}))>=constants.zD){var updatedCart=cart.filter((function(item){return item.id!==id}));setDataInLocalStorage("cart",cart),set(CartState.d,updatedCart)}}}}),totalPriceSelector=(0,es.CG)({key:"totalPriceSelector",get:function get(selectedItems){return function(_ref11){return(0,_ref11.get)(CartState.d).filter((function(item){return selectedItems.includes(item.id)})).reduce((function(total,item){return total+item.quantity*item.product.price}),0)}}})},"./src/store/CartState.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{d:function(){return cartState}});var cartState=(0,__webpack_require__("./node_modules/recoil/es/index.js").cn)({key:"cartState",default:[],effects:[function localStorageEffect(key){return function(_ref){var setSelf=_ref.setSelf,onSet=_ref.onSet,savedValue=localStorage.getItem(key);null!==savedValue&&setSelf(JSON.parse(savedValue)),onSet((function(newValue,_,isReset){return isReset?localStorage.removeItem(key):localStorage.setItem(key,JSON.stringify(newValue))}))}}("cart")]})},"./src/store/ProductListState.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{v:function(){return productListState}});var productListState=(0,__webpack_require__("./node_modules/recoil/es/index.js").cn)({key:"productListState",default:[]})}}]);