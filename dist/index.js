"use strict";var d=function(n,r){return function(){return r||n((r={exports:{}}).exports,r),r.exports}};var m=d(function(w,v){
var l=require('@stdlib/ndarray-base-normalize-index/dist'),f=require('@stdlib/ndarray-base-shape/dist'),g=require('@stdlib/ndarray-base-slice-from/dist'),h=require('@stdlib/ndarray-base-slice-to/dist'),q=require('@stdlib/array-base-nulls/dist'),t=require('@stdlib/error-tools-fmtprodmsg/dist');function c(n,r,o){var s,u,a,e,i;if(a=f(n),e=a.length,e===0)throw new TypeError(t('nullF7',e));if(r=l(r,e-1),r===-1)throw new RangeError(t('nullF8',e,r));return i=q(e),i[r]=a[r]-1,s=h(n,i,!0,o),u=g(n,i,!0,o),[s,u]}v.exports=c
});var p=m();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
