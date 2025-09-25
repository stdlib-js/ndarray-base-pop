"use strict";var l=function(n,r){return function(){return r||n((r={exports:{}}).exports,r),r.exports}};var m=l(function(w,v){
var f=require('@stdlib/ndarray-base-normalize-index/dist'),d=require('@stdlib/ndarray-base-shape/dist'),g=require('@stdlib/ndarray-base-slice-from/dist'),h=require('@stdlib/ndarray-base-slice-to/dist'),q=require('@stdlib/array-base-nulls/dist'),t=require('@stdlib/error-tools-fmtprodmsg/dist');function c(n,r,s){var o,u,i,e,a;if(i=d(n),e=i.length,e===0)throw new TypeError(t('nullF7',e));if(r=f(r,e-1),r===-1)throw new RangeError(t('nullF8',e,r));return a=q(e),a[r]=i[r]-1,o=h(n,a,!1,s),u=g(n,a,!1,s),[o,u]}v.exports=c
});var p=m();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
