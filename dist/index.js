"use strict";var q=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(s){throw r=0,s}}};var v=q(function(j,c){"use strict";function R(e,r,s,t,n,a,u){return e>>>=0,r>>>=0,s>>>=0,t>>>=0,n[u]=(e^s)>>>0,n[u+a]=(r^t)>>>0,n}c.exports=R});var x=q(function(k,o){"use strict";var U=require("@stdlib/array-uint32"),g=require("@stdlib/number-uint64-base-to-words").assign,W=require("@stdlib/number-uint64-ctor"),m=v(),i=new U(6);function w(e,r){return g(e,i,1,0),g(r,i,1,2),m(i[0],i[1],i[2],i[3],i,1,4),W.of(i[4],i[5])}o.exports=w});var f=q(function(z,p){"use strict";var C=v();function E(e,r,s,t,n,a,u,A,O){return C(e[s],e[s+r],t[a],t[a+n],u,A,O),u}p.exports=E});var y=require("@stdlib/utils-define-nonenumerable-read-only-property"),d=x(),K=v(),P=f();y(d,"assign",K);y(d,"strided",P);module.exports=d;
/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
