"use strict";var l=function(n,r){return function(){try{return r||n((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var m=l(function(w,v){
var f=require('@stdlib/ndarray-base-normalize-index/dist'),d=require('@stdlib/ndarray-base-shape/dist'),g=require('@stdlib/ndarray-base-slice-from/dist'),h=require('@stdlib/ndarray-base-slice-to/dist'),q=require('@stdlib/array-base-nulls/dist'),t=require('@stdlib/error-tools-fmtprodmsg/dist');function c(n,r,a){var o,u,s,e,i;if(s=d(n),e=s.length,e===0)throw new TypeError(t('2WbF7',e));if(r=f(r,e-1),r===-1)throw new RangeError(t('2WbF8',e,r));return i=q(e),i[r]=s[r]-1,o=h(n,i,!1,a),u=g(n,i,!1,a),[o,u]}v.exports=c
});var p=m();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
