(this["webpackJsonpcrosschain.quest"]=this["webpackJsonpcrosschain.quest"]||[]).push([[5],{1729:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}));var a={average:.67,fast:1,fastest:1.5},i=function(e){var t,n=e.inboundData,a=e.chain,i=n.find((function(e){return e.chain===a}));return Number(null!==(t=null===i||void 0===i?void 0:i.gas_rate)&&void 0!==t?t:0)},r=function(e){var t=e.inboundData,n=e.chain,r=e.feeOptionType;return i({inboundData:t,chain:n})*a[r]}},1730:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),i=n(21),r=n(158),o=n(107),s=n(1729),c=function(e){var t=e.inputAsset,n=e.outputAsset,c=Object(r.a)().feeOptionType,u=Object(o.a)(),d=u.inboundData,l=u.pools,b=Object(a.useMemo)((function(){var e=Object(s.b)({inboundData:d,chain:t.L1Chain,feeOptionType:c});return i.NetworkFee.getNetworkFeeByAsset({asset:t,gasRate:e,direction:"inbound"})}),[t,d,c]),p=Object(a.useMemo)((function(){if(!n)return null;var e=Object(s.a)({inboundData:d,chain:n.L1Chain});return i.NetworkFee.getNetworkFeeByAsset({asset:n,gasRate:e,direction:"outbound"})}),[n,d]),f=Object(a.useMemo)((function(){if(!p)return b;var e=new i.AssetAmount(t,i.Amount.fromAssetAmount(p.totalPriceIn(t,l).price,t.decimal));return b.asset.eq(t)?b.add(e):new i.AssetAmount(t,i.Amount.fromAssetAmount(b.totalPriceIn(t,l).price,t.decimal)).add(e)}),[t,b,p,l]),m=Object(a.useMemo)((function(){return f.totalPriceIn(i.Asset.USD(),l)}),[f,l]);return{totalFee:f,inboundFee:b,outboundFee:p,totalFeeInUSD:m}}},1734:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a,i=n(0),r=new Uint8Array(16);function o(){if(!a&&!(a="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(r)}var s=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var c=function(e){return"string"===typeof e&&s.test(e)},u=[],d=0;d<256;++d)u.push((d+256).toString(16).substr(1));var l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(u[e[t+0]]+u[e[t+1]]+u[e[t+2]]+u[e[t+3]]+"-"+u[e[t+4]]+u[e[t+5]]+"-"+u[e[t+6]]+u[e[t+7]]+"-"+u[e[t+8]]+u[e[t+9]]+"-"+u[e[t+10]]+u[e[t+11]]+u[e[t+12]]+u[e[t+13]]+u[e[t+14]]+u[e[t+15]]).toLowerCase();if(!c(n))throw TypeError("Stringified UUID is invalid");return n};var b=function(e,t,n){var a=(e=e||{}).random||(e.rng||o)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){n=n||0;for(var i=0;i<16;++i)t[n+i]=a[i];return t}return l(a)},p=n(107),f=n(35),m=function(){var e=Object(p.a)(),t=e.addNewTxTracker,n=e.updateTxTracker,a=e.clearTxTrackers,r=e.processSubmittedTx;return{submitTransaction:Object(i.useCallback)((function(e){var n=e.type,a=e.submitTx,i=b();return t({uuid:i,type:n,status:f.b.Submitting,submitTx:a,action:null,refunded:null}),i}),[t]),pollTransaction:Object(i.useCallback)((function(e){var t=e.uuid,a=e.submitTx,i=e.type;n({uuid:t,txTracker:{status:f.b.Pending,submitTx:a}}),r({submitTx:a,type:i})}),[n,r]),clearTxTrackers:a,setTxFailed:Object(i.useCallback)((function(e){n({uuid:e,txTracker:{status:f.b.Failed}})}),[n])}}},1741:function(e,t,n){"use strict";n.r(t);var a,i=n(2),r=n.n(i),o=n(12),s=n(25),c=n(0),u=n(294),d=n(21),l=n(35),b=n(159),p=n(1730),f=n(1734),m=n(59),j=n(384),g=n(74),O=n(9),x=n(5),y=n(6),h=n(52),v=Object(x.d)(u.Panel).withConfig({displayName:"Upgradestyle__Container",componentId:"sc-1byr4wb-0"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;background:",";margin-left:auto;margin-right:auto;padding-top:0px;border-radius:14px;border:1px solid ",";"],Object(y.palette)("background",0),Object(y.palette)("gray",0)),w=x.d.div.withConfig({displayName:"Upgradestyle__ContentPanel",componentId:"sc-1byr4wb-1"})(["display:flex;flex-direction:column;width:100%;padding:16px 8px 8px 8px;",""],h.a.sm(a||(a=Object(O.a)(["\n    padding: 16px 12px 4px 12px;\n  "])))),C=(x.d.div.withConfig({displayName:"Upgradestyle__PoolSelect",componentId:"sc-1byr4wb-2"})(["display:flex;justify-content:space-between;align-items:center;padding:8px 16px;"]),x.d.div.withConfig({displayName:"Upgradestyle__FormItem",componentId:"sc-1byr4wb-3"})(["display:flex;flex-direction:column;margin:8px 0;"])),A=(Object(x.d)(u.Label).attrs({weight:"bold"}).withConfig({displayName:"Upgradestyle__FormLabel",componentId:"sc-1byr4wb-4"})(["margin-bottom:8px;"]),x.d.div.withConfig({displayName:"Upgradestyle__ConfirmModalContent",componentId:"sc-1byr4wb-5"})(["display:flex;flex-direction:column;padding:10px;"])),T=(x.d.div.withConfig({displayName:"Upgradestyle__MemoTypes",componentId:"sc-1byr4wb-6"})(["display:flex;align-items:center;justify-content:space-between;width:130px;"]),x.d.div.withConfig({displayName:"Upgradestyle__ConfirmButtonContainer",componentId:"sc-1byr4wb-7"})(["display:flex;justify-content:center;align-items:center;width:100%;padding:0 2%;margin-top:14px;button{flex:1;}"])),k=n(1),S=function(e){var t=e.runeToUpgrade,n=e.wallet,a=Object(f.a)(),i=a.submitTransaction,b=a.pollTransaction,O=a.setTxFailed,x=Object(c.useState)(t[0]),y=Object(s.a)(x,2),h=y[0],S=y[1],U=Object(c.useState)(d.Amount.fromAssetAmount(0,8)),N=Object(s.a)(U,2),I=N[0],R=N[1],F=Object(c.useState)(0),_=Object(s.a)(F,2),D=_[0],M=_[1],E=Object(c.useState)(!1),P=Object(s.a)(E,2),B=P[0],L=P[1],H=Object(c.useState)(""),V=Object(s.a)(H,2),q=V[0],W=V[1],J=m.a.getWalletAddressByChain("THOR")||"",Y=Object(c.useMemo)((function(){return n?Object(d.getAssetBalance)(h,n).amount:d.Amount.fromAssetAmount(0,8)}),[h,n]),$=Object(p.a)({inputAsset:h}).inboundFee;Object(c.useEffect)((function(){var e=m.a.getWalletAddressByChain("THOR");W(e||"")}),[]);var z=Object(c.useCallback)((function(e){S(e)}),[]),G=Object(c.useCallback)((function(e){e.gt(Y)?(R(Y),M(100)):(R(e),M(e.div(Y).mul(100).assetAmount.toNumber()))}),[Y]),K=Object(c.useCallback)((function(e){M(e);var t=Y.mul(e).div(100);R(t)}),[Y]),Q=Object(c.useCallback)((function(){K(100)}),[K]),X=Object(c.useCallback)(Object(o.a)(r.a.mark((function e(){var t,n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(L(!1),!h||!q){e.next=16;break}return t=new d.AssetAmount(h,I),n=i({type:l.c.Switch,submitTx:{inAssets:[{asset:h.toString(),amount:I.toSignificant(6)}],outAssets:[{asset:d.Asset.RUNE().toString(),amount:I.toSignificant(6)}],recipient:q}}),e.prev=4,e.next=7,m.a.upgrade({runeAmount:t,recipient:q});case 7:a=e.sent,b({type:l.c.Switch,uuid:n,submitTx:{inAssets:[{asset:h.toString(),amount:I.toSignificant(6)}],outAssets:[{asset:d.Asset.RUNE().toString(),amount:I.toSignificant(6)}],txID:a,submitDate:new Date,recipient:q}}),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(4),O(n),Object(u.Notification)({type:"error",message:"Submit Transaction Failed.",duration:20}),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[4,11]])}))),[h,I,i,b,q,O]),Z=Object(c.useCallback)((function(){L(!1)}),[]),ee=Object(c.useCallback)((function(){q?m.a.validateAddress({chain:"THOR",address:q})?L(!0):Object(u.Notification)({type:"error",message:"Invalid Recipient Address",description:"Recipient address should be a valid address."}):Object(u.Notification)({type:"info",message:"You have to connect wallet for Thorchain."})}),[q]),te=Object(c.useMemo)((function(){return Object(k.jsxs)(A,{children:[Object(k.jsx)(u.Information,{title:"Upgrade",description:"".concat(h.ticker.toUpperCase()," (").concat(h.type.toUpperCase(),")")}),Object(k.jsx)(u.Information,{title:"Transaction Fee",description:$.toCurrencyFormat(),tooltip:g.i}),Object(k.jsx)("br",{}),Object(k.jsx)(u.Information,{title:"Recipient Address",description:Object(j.b)(q)})]})}),[$,h,q]),ne=Object(c.useMemo)((function(){return"Upgrade ".concat(h.chain," RUNE")}),[h]);return Object(k.jsxs)(v,{children:[Object(k.jsx)(u.Helmet,{title:ne,content:ne}),Object(k.jsx)(u.ContentTitle,{children:ne}),Object(k.jsxs)(w,{children:[Object(k.jsx)(u.AssetInputCard,{title:"upgrade",asset:h,assets:t,selectDisabled:2!==t.length,amount:I,balance:Y,onChange:G,onSelect:z,onMax:Q,wallet:n||void 0}),Object(k.jsx)(u.Slider,{value:D,onChange:K,withLabel:!0}),Object(k.jsx)(C,{children:Object(k.jsx)(u.Information,{title:"Transaction Fee",description:$.toCurrencyFormat(),tooltip:g.i})}),Object(k.jsx)(u.AddressSelectCard,{title:"Recipient Address",address:q,chain:"THOR",chainAddr:J,onAddressChange:W}),Object(k.jsx)(T,{children:Object(k.jsx)(u.FancyButton,{onClick:ee,error:!1,children:"Upgrade"})})]}),Object(k.jsx)(u.ConfirmModal,{visible:B,onOk:X,onCancel:Z,inputAssets:[h],children:te})]})},U=function(){var e=Object(b.a)().wallet,t=Object(c.useMemo)((function(){return Object(d.getRuneToUpgrade)(e)}),[e]),n=Object(c.useMemo)((function(){return t&&Object(d.hasWalletConnected)({wallet:e,inputAssets:t})}),[e,t]);return e&&n?t&&0!==t.length?Object(k.jsx)(S,{runeToUpgrade:t,wallet:e}):Object(k.jsx)(v,{children:Object(k.jsx)(u.Label,{children:"You don't have BEP2 or ERC20 RUNE to upgrade."})}):Object(k.jsx)(v,{children:Object(k.jsx)(u.Label,{children:"Please connect a wallet."})})};t.default=U}}]);
//# sourceMappingURL=5.ed858399.chunk.js.map