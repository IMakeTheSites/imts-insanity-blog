"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16],{19:function(e,t,n){n.d(t,{ET:function(){return sp},ad:function(){return se},hJ:function(){return n6}});var s,r,i=n(5816),a=n(740),o=n(3333),l=n(4444),u=n(3510);n(3454);let h="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}c.UNAUTHENTICATED=new c(null),c.GOOGLE_CREDENTIALS=new c("google-credentials-uid"),c.FIRST_PARTY=new c("first-party-uid"),c.MOCK_USER=new c("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let d="9.18.0",f=new o.Yd("@firebase/firestore");function m(){return f.logLevel}function p(e,...t){if(f.logLevel<=o.in.DEBUG){let n=t.map(w);f.debug(`Firestore (${d}): ${e}`,...n)}}function g(e,...t){if(f.logLevel<=o.in.ERROR){let n=t.map(w);f.error(`Firestore (${d}): ${e}`,...n)}}function y(e,...t){if(f.logLevel<=o.in.WARN){let n=t.map(w);f.warn(`Firestore (${d}): ${e}`,...n)}}function w(e){if("string"==typeof e)return e;try{return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e="Unexpected state"){let t=`FIRESTORE (${d}) INTERNAL ASSERTION FAILED: `+e;throw g(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends l.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class C{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(c.UNAUTHENTICATED))}shutdown(){}}class N{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class S{constructor(e){this.t=e,this.currentUser=c.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i,s=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),r=new I;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new I,e.enqueueRetryable(()=>s(this.currentUser))};let i=()=>{let t=r;e.enqueueRetryable(async()=>{await t.promise,await s(this.currentUser)})},a=e=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new I)}},0),i()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||v(),new A(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||v(),new c(e)}}class k{constructor(e,t,n,s){this.h=e,this.l=t,this.m=n,this.g=s,this.type="FirstParty",this.user=c.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():("object"==typeof this.h&&null!==this.h&&this.h.auth&&this.h.auth.getAuthHeaderValueForFirstParty||v(),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class b{constructor(e,t,n,s){this.h=e,this.l=t,this.m=n,this.g=s}getToken(){return Promise.resolve(new k(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(c.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class D{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){let n=e=>{null!=e.error&&p("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.A;return this.A=e.token,p("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let s=e=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit(e=>s(e)),setTimeout(()=>{if(!this.appCheck){let e=this.T.getImmediate({optional:!0});e?s(e):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||v(),this.A=e.token,new D(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static R(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let s=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}(40);for(let r=0;r<s.length;++r)n.length<20&&s[r]<t&&(n+=e.charAt(s[r]%e.length))}return n}}function x(e,t){return e<t?-1:e>t?1:0}function L(e,t,n){return e.length===t.length&&e.every((e,s)=>n(e,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new T(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new T(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return V.fromMillis(Date.now())}static fromDate(e){return V.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new V(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?x(this.nanoseconds,e.nanoseconds):x(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.timestamp=e}static fromTimestamp(e){return new O(e)}static min(){return new O(new V(0,0))}static max(){return new O(new V(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,t,n){void 0===t?t=0:t>e.length&&v(),void 0===n?n=e.length-t:n>e.length-t&&v(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===F.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof F?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let s=0;s<n;s++){let n=e.get(s),r=t.get(s);if(n<r)return -1;if(n>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class M extends F{construct(e,t,n){return new M(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new T(E.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new M(t)}static emptyPath(){return new M([])}}let U=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class P extends F{construct(e,t,n){return new P(e,t,n)}static isValidIdentifier(e){return U.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),P.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new P(["__name__"])}static fromServerFormat(e){let t=[],n="",s=0,r=()=>{if(0===n.length)throw new T(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},i=!1;for(;s<e.length;){let t=e[s];if("\\"===t){if(s+1===e.length)throw new T(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[s+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new T(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,s+=2}else"`"===t?(i=!i,s++):"."!==t||i?(n+=t,s++):(r(),s++)}if(r(),i)throw new T(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new P(t)}static emptyPath(){return new P([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(M.fromString(e))}static fromName(e){return new $(M.fromString(e).popFirst(5))}static empty(){return new $(M.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===M.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return M.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new M(e.slice()))}}class B{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new B(O.min(),$.empty(),-1)}static max(){return new B(O.max(),$.empty(),-1)}}class q{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e){if(e.code!==E.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;p("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new G((n,s)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,s)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof G?t:G.resolve(t)}catch(e){return G.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):G.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):G.reject(t)}static resolve(e){return new G((t,n)=>{t(e)})}static reject(e){return new G((t,n)=>{n(e)})}static waitFor(e){return new G((t,n)=>{let s=0,r=0,i=!1;e.forEach(e=>{++s,e.next(()=>{++r,i&&r===s&&t()},e=>n(e))}),i=!0,r===s&&t()})}static or(e){let t=G.resolve(!1);for(let n of e)t=t.next(e=>e?G.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,s)=>{n.push(t.call(this,e,s))}),this.waitFor(n)}static mapArray(e,t){return new G((n,s)=>{let r=e.length,i=Array(r),a=0;for(let o=0;o<r;o++){let l=o;t(e[l]).next(e=>{i[l]=e,++a===r&&n(i)},e=>s(e))}})}static doWhile(e,t){return new G((n,s)=>{let r=()=>{!0===e()?t().next(()=>{r()},s):n()};r()})}}function Q(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ct&&this.ct(e),e}}j.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,t,n,s,r,i,a,o){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=r,this.forceLongPolling=i,this.autoDetectLongPolling=a,this.useFetchStreams=o}}class H{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new H("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof H&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function W(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Y(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function J(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(e){try{return atob(e)}catch(e){throw e instanceof DOMException?new Z("Invalid base64 string: "+e):e}}(e);return new ee(t)}static fromUint8Array(e){let t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new ee(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return x(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ee.EMPTY_BYTE_STRING=new ee("");let et=RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function en(e){if(e||v(),"string"==typeof e){let t=0,n=et.exec(e);if(n||v(),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}let s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:es(e.seconds),nanos:es(e.nanos)}}function es(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function er(e){return"string"==typeof e?ee.fromBase64String(e):ee.fromUint8Array(e)}function ei(e){let t=en(e.mapValue.fields.__local_write_time__.timestampValue);return new V(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ea={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function eo(e){var t,n;return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)?4:ey(e)?9007199254740991:10:v()}function el(e,t){if(e===t)return!0;let n=eo(e);if(n!==eo(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ei(e).isEqual(ei(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=en(e.timestampValue),s=en(t.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return er(e.bytesValue).isEqual(er(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return es(e.geoPointValue.latitude)===es(t.geoPointValue.latitude)&&es(e.geoPointValue.longitude)===es(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return es(e.integerValue)===es(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=es(e.doubleValue),s=es(t.doubleValue);return n===s?J(n)===J(s):isNaN(n)&&isNaN(s)}return!1}(e,t);case 9:return L(e.arrayValue.values||[],t.arrayValue.values||[],el);case 10:return function(e,t){let n=e.mapValue.fields||{},s=t.mapValue.fields||{};if(X(n)!==X(s))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===s[e]||!el(n[e],s[e])))return!1;return!0}(e,t);default:return v()}}function eu(e,t){return void 0!==(e.values||[]).find(e=>el(e,t))}function eh(e,t){if(e===t)return 0;let n=eo(e),s=eo(t);if(n!==s)return x(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return x(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=es(e.integerValue||e.doubleValue),s=es(t.integerValue||t.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(e,t);case 3:return ec(e.timestampValue,t.timestampValue);case 4:return ec(ei(e),ei(t));case 5:return x(e.stringValue,t.stringValue);case 6:return function(e,t){let n=er(e),s=er(t);return n.compareTo(s)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),s=t.split("/");for(let e=0;e<n.length&&e<s.length;e++){let t=x(n[e],s[e]);if(0!==t)return t}return x(n.length,s.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=x(es(e.latitude),es(t.latitude));return 0!==n?n:x(es(e.longitude),es(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let n=e.values||[],s=t.values||[];for(let e=0;e<n.length&&e<s.length;++e){let t=eh(n[e],s[e]);if(t)return t}return x(n.length,s.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===ea.mapValue&&t===ea.mapValue)return 0;if(e===ea.mapValue)return 1;if(t===ea.mapValue)return -1;let n=e.fields||{},s=Object.keys(n),r=t.fields||{},i=Object.keys(r);s.sort(),i.sort();for(let e=0;e<s.length&&e<i.length;++e){let t=x(s[e],i[e]);if(0!==t)return t;let a=eh(n[s[e]],r[i[e]]);if(0!==a)return a}return x(s.length,i.length)}(e.mapValue,t.mapValue);default:throw v()}}function ec(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return x(e,t);let n=en(e),s=en(t),r=x(n.seconds,s.seconds);return 0!==r?r:x(n.nanos,s.nanos)}function ed(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=en(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?er(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,$.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(let s of e.values||[])n?n=!1:t+=",",t+=ed(s);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",s=!0;for(let r of t)s?s=!1:n+=",",n+=`${r}:${ed(e.fields[r])}`;return n+"}"}(e.mapValue):v()}function ef(e){return!!e&&"integerValue"in e}function em(e){return!!e&&"arrayValue"in e}function ep(e){return!!e&&"mapValue"in e}function eg(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return W(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=eg(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=eg(e.arrayValue.values[n]);return t}return Object.assign({},e)}function ey(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e,t){this.position=e,this.inclusive=t}}function ev(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){let i=t[r],a=e.position[r];if(s=i.field.isKeyField()?$.comparator($.fromName(a.referenceValue),n.key):eh(a,n.data.field(i.field)),"desc"===i.dir&&(s*=-1),0!==s)break}return s}function eE(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!el(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{}class eI extends eT{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new eS(e,t,n):"array-contains"===t?new e_(e,n):"in"===t?new eR(e,n):"not-in"===t?new ex(e,n):"array-contains-any"===t?new eL(e,n):new eI(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new ek(e,n):new eb(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(eh(t,this.value)):null!==t&&eo(this.value)===eo(t)&&this.matchesComparison(eh(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return v()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class eA extends eT{constructor(e,t){super(),this.filters=e,this.op=t,this.ft=null}static create(e,t){return new eA(e,t)}matches(e){return eC(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ft||(this.ft=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let e=this.dt(e=>e.isInequality());return null!==e?e.field:null}dt(e){for(let t of this.getFlattenedFilters())if(e(t))return t;return null}}function eC(e){return"and"===e.op}function eN(e){for(let t of e.filters)if(t instanceof eA)return!1;return!0}class eS extends eI{constructor(e,t,n){super(e,t,n),this.key=$.fromName(n.referenceValue)}matches(e){let t=$.comparator(e.key,this.key);return this.matchesComparison(t)}}class ek extends eI{constructor(e,t){super(e,"in",t),this.keys=eD("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class eb extends eI{constructor(e,t){super(e,"not-in",t),this.keys=eD("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function eD(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>$.fromName(e.referenceValue))}class e_ extends eI{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return em(t)&&eu(t.arrayValue,this.value)}}class eR extends eI{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&eu(this.value.arrayValue,t)}}class ex extends eI{constructor(e,t){super(e,"not-in",t)}matches(e){if(eu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!eu(this.value.arrayValue,t)}}class eL extends eI{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!em(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>eu(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(e,t){this.comparator=e,this.root=t||eM.EMPTY}insert(e,t){return new eO(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,eM.BLACK,null,null))}remove(e){return new eO(this.comparator,this.root.remove(e,this.comparator).copy(null,null,eM.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let s=this.comparator(e,n.key);if(0===s)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new eF(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new eF(this.root,e,this.comparator,!1)}getReverseIterator(){return new eF(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new eF(this.root,e,this.comparator,!0)}}class eF{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,t&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class eM{constructor(e,t,n,s,r){this.key=e,this.value=t,this.color=null!=n?n:eM.RED,this.left=null!=s?s:eM.EMPTY,this.right=null!=r?r:eM.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,r){return new eM(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this,r=n(e,s.key);return(s=r<0?s.copy(null,null,null,s.left.insert(e,t,n),null):0===r?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return eM.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,s=this;if(0>t(e,s.key))s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===t(e,s.key)){if(s.right.isEmpty())return eM.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,eM.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,eM.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw v();let e=this.left.check();if(e!==this.right.check())throw v();return e+(this.isRed()?0:1)}}eM.EMPTY=null,eM.RED=!0,eM.BLACK=!1,eM.EMPTY=new class{constructor(){this.size=0}get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(e,t,n,s,r){return this}insert(e,t,n){return new eM(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eU{constructor(e){this.comparator=e,this.data=new eO(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new eP(this.data.getIterator())}getIteratorFrom(e){return new eP(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof eU)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,s=n.getNext().key;if(0!==this.comparator(e,s))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new eU(this.comparator);return t.data=e,t}}class eP{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e${constructor(e){this.fields=e,e.sort(P.comparator)}static empty(){return new e$([])}unionWith(e){let t=new eU(P.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new e$(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return L(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eB{constructor(e){this.value=e}static empty(){return new eB({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!ep(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=eg(t)}setAll(e){let t=P.emptyPath(),n={},s=[];e.forEach((e,r)=>{if(!t.isImmediateParentOf(r)){let e=this.getFieldsMap(t);this.applyChanges(e,n,s),n={},s=[],t=r.popLast()}e?n[r.lastSegment()]=eg(e):s.push(r.lastSegment())});let r=this.getFieldsMap(t);this.applyChanges(r,n,s)}delete(e){let t=this.field(e.popLast());ep(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return el(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];ep(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){for(let s of(W(t,(t,n)=>e[t]=n),n))delete e[s]}clone(){return new eB(eg(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eq{constructor(e,t,n,s,r,i,a){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=r,this.data=i,this.documentState=a}static newInvalidDocument(e){return new eq(e,0,O.min(),O.min(),O.min(),eB.empty(),0)}static newFoundDocument(e,t,n,s){return new eq(e,1,t,O.min(),n,s,0)}static newNoDocument(e,t){return new eq(e,2,t,O.min(),O.min(),eB.empty(),0)}static newUnknownDocument(e,t){return new eq(e,3,t,O.min(),O.min(),eB.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(O.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=eB.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=eB.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=O.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof eq&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new eq(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eK{constructor(e,t=null,n=[],s=[],r=null,i=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=r,this.startAt=i,this.endAt=a,this._t=null}}function eG(e,t=null,n=[],s=[],r=null,i=null,a=null){return new eK(e,t,n,s,r,i,a)}function eQ(e){let t=e;if(null===t._t){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:"+t.filters.map(e=>(function e(t){if(t instanceof eI)return t.field.canonicalString()+t.op.toString()+ed(t.value);if(eN(t)&&eC(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(",")+"|ob:"+t.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==t.limit||(e+="|l:"+t.limit),t.startAt&&(e+="|lb:"+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>ed(e)).join(",")),t.endAt&&(e+="|ub:"+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>ed(e)).join(",")),t._t=e}return t._t}function ej(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let r=0;r<e.orderBy.length;r++){var n,s;if(n=e.orderBy[r],s=t.orderBy[r],!(n.dir===s.dir&&n.field.isEqual(s.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof eI?n instanceof eI&&t.op===n.op&&t.field.isEqual(n.field)&&el(t.value,n.value):t instanceof eA?n instanceof eA&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,s,r)=>t&&e(s,n.filters[r]),!0):void v()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!eE(e.startAt,t.startAt)&&eE(e.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ez{constructor(e,t=null,n=[],s=[],r=null,i="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=r,this.limitType=i,this.startAt=a,this.endAt=o,this.wt=null,this.gt=null,this.startAt,this.endAt}}function eH(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function eX(e){let t=e;if(null===t.wt){t.wt=[];let e=function(e){for(let t of e.filters){let e=t.getFirstInequalityField();if(null!==e)return e}return null}(t),n=t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null;if(null!==e&&null===n)e.isKeyField()||t.wt.push(new eV(e)),t.wt.push(new eV(P.keyField(),"asc"));else{let e=!1;for(let n of t.explicitOrderBy)t.wt.push(n),n.field.isKeyField()&&(e=!0);if(!e){let e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new eV(P.keyField(),e))}}}return t.wt}function eW(e){let t=e;if(!t.gt){if("F"===t.limitType)t.gt=eG(t.path,t.collectionGroup,eX(t),t.filters,t.limit,t.startAt,t.endAt);else{let e=[];for(let n of eX(t)){let t="desc"===n.dir?"asc":"desc";e.push(new eV(n.field,t))}let n=t.endAt?new ew(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new ew(t.startAt.position,t.startAt.inclusive):null;t.gt=eG(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}return t.gt}function eY(e,t,n){return new ez(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function eJ(e,t){return ej(eW(e),eW(t))&&e.limitType===t.limitType}function eZ(e){return`${eQ(eW(e))}|lt:${e.limitType}`}function e0(e){var t;let n;return`Query(target=${n=(t=eW(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof eI?`${t.field.canonicalString()} ${t.op} ${ed(t.value)}`:t instanceof eA?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>ed(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>ed(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function e1(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):$.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of eX(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let s=ev(e,t,n);return e.inclusive?s<=0:s<0}(e.startAt,eX(e),t))&&(!e.endAt||!!function(e,t,n){let s=ev(e,t,n);return e.inclusive?s>=0:s>0}(e.endAt,eX(e),t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e4(e,t){if(e.yt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:J(t)?"-0":t}}function e9(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(){this._=void 0}}function e3(e,t){return e instanceof tt?ef(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class e5 extends e2{}class e6 extends e2{constructor(e){super(),this.elements=e}}function e8(e,t){let n=ts(t);for(let t of e.elements)n.some(e=>el(e,t))||n.push(t);return{arrayValue:{values:n}}}class e7 extends e2{constructor(e){super(),this.elements=e}}function te(e,t){let n=ts(t);for(let t of e.elements)n=n.filter(e=>!el(e,t));return{arrayValue:{values:n}}}class tt extends e2{constructor(e,t){super(),this.Tt=e,this.It=t}}function tn(e){return es(e.integerValue||e.doubleValue)}function ts(e){return em(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class tr{constructor(e,t){this.version=e,this.transformResults=t}}class ti{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ti}static exists(e){return new ti(void 0,e)}static updateTime(e){return new ti(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ta(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class to{}function tl(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new tg(e.key,ti.none()):new tc(e.key,e.data,ti.none());{let n=e.data,s=eB.empty(),r=new eU(P.comparator);for(let e of t.fields)if(!r.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?s.delete(e):s.set(e,t),r=r.add(e)}return new td(e.key,s,new e$(r.toArray()),ti.none())}}function tu(e,t,n,s){return e instanceof tc?function(e,t,n,s){if(!ta(e.precondition,t))return n;let r=e.value.clone(),i=tp(e.fieldTransforms,s,t);return r.setAll(i),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null}(e,t,n,s):e instanceof td?function(e,t,n,s){if(!ta(e.precondition,t))return n;let r=tp(e.fieldTransforms,s,t),i=t.data;return(i.setAll(tf(e)),i.setAll(r),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,s):ta(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function th(e,t){var n,s;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,s=t.fieldTransforms,!!(void 0===n&&void 0===s||!(!n||!s)&&L(n,s,(e,t)=>{var n,s;return e.field.isEqual(t.field)&&(n=e.transform,s=t.transform,n instanceof e6&&s instanceof e6||n instanceof e7&&s instanceof e7?L(n.elements,s.elements,el):n instanceof tt&&s instanceof tt?el(n.It,s.It):n instanceof e5&&s instanceof e5)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class tc extends to{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class td extends to{constructor(e,t,n,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function tf(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let s=e.data.field(n);t.set(n,s)}}),t}function tm(e,t,n){var s;let r=new Map;e.length===n.length||v();for(let i=0;i<n.length;i++){let a=e[i],o=a.transform,l=t.data.field(a.field);r.set(a.field,(s=n[i],o instanceof e6?e8(o,l):o instanceof e7?te(o,l):s))}return r}function tp(e,t,n){let s=new Map;for(let r of e){let e=r.transform,i=n.data.field(r.field);s.set(r.field,e instanceof e5?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,i):e instanceof e6?e8(e,i):e instanceof e7?te(e,i):function(e,t){let n=e3(e,t),s=tn(n)+tn(e.It);return ef(n)&&ef(e.It)?e9(s):e4(e.Tt,s)}(e,i))}return s}class tg extends to{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ty extends to{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}(r=s||(s={}))[r.OK=0]="OK",r[r.CANCELLED=1]="CANCELLED",r[r.UNKNOWN=2]="UNKNOWN",r[r.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",r[r.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",r[r.NOT_FOUND=5]="NOT_FOUND",r[r.ALREADY_EXISTS=6]="ALREADY_EXISTS",r[r.PERMISSION_DENIED=7]="PERMISSION_DENIED",r[r.UNAUTHENTICATED=16]="UNAUTHENTICATED",r[r.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",r[r.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",r[r.ABORTED=10]="ABORTED",r[r.OUT_OF_RANGE=11]="OUT_OF_RANGE",r[r.UNIMPLEMENTED=12]="UNIMPLEMENTED",r[r.INTERNAL=13]="INTERNAL",r[r.UNAVAILABLE=14]="UNAVAILABLE",r[r.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,s]of n)if(this.equalsFn(t,e))return s}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),s=this.inner[n];if(void 0===s)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],e))return void(s[n]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return 1===n.length?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){W(this.inner,(t,n)=>{for(let[t,s]of n)e(t,s)})}isEmpty(){return Y(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tv=new eO($.comparator),tE=new eO($.comparator);function tT(...e){let t=tE;for(let n of e)t=t.insert(n.key,n);return t}function tI(e){let t=tE;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function tA(){return new tw(e=>e.toString(),(e,t)=>e.isEqual(t))}let tC=new eO($.comparator),tN=new eU($.comparator);function tS(...e){let t=tN;for(let n of e)t=t.add(n);return t}let tk=new eU(x);class tb{constructor(e,t){this.databaseId=e,this.yt=t}}function tD(e,t){return e.yt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function t_(e){return e||v(),O.fromTimestamp(function(e){let t=en(e);return new V(t.seconds,t.nanos)}(e))}function tR(e,t){return new M(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function tx(e,t){return tR(e.databaseId,t.path)}function tL(e,t,n){return{name:tx(e,t),fields:n.value.mapValue.fields}}function tV(e){return P.fromServerFormat(e.fieldPath)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let r=this.mutations[t];if(r.key.isEqual(e.key)){var s;s=n[t],r instanceof tc?function(e,t,n){let s=e.value.clone(),r=tm(e.fieldTransforms,t,n.transformResults);s.setAll(r),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(r,e,s):r instanceof td?function(e,t,n){if(!ta(e.precondition,t))return void t.convertToUnknownDocument(n.version);let s=tm(e.fieldTransforms,t,n.transformResults),r=t.data;r.setAll(tf(e)),r.setAll(s),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(r,e,s):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,s)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=tu(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=tu(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=tA();return this.mutations.forEach(s=>{let r=e.get(s.key),i=r.overlayedDocument,a=this.applyToLocalView(i,r.mutatedFields);a=t.has(s.key)?null:a;let o=tl(i,a);null!==o&&n.set(s.key,o),i.isValidDocument()||i.convertToNoDocument(O.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),tS())}isEqual(e){return this.batchId===e.batchId&&L(this.mutations,e.mutations,(e,t)=>th(e,t))&&L(this.baseMutations,e.baseMutations,(e,t)=>th(e,t))}}class tF{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){e.mutations.length===n.length||v();let s=tC,r=e.mutations;for(let e=0;e<r.length;e++)s=s.insert(r[e].key,n[e].version);return new tF(e,t,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tU{constructor(e){this.oe=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(){}ae(e,t){this.he(e,t),t.le()}he(e,t){if("nullValue"in e)this.fe(t,5);else if("booleanValue"in e)this.fe(t,10),t.de(e.booleanValue?1:0);else if("integerValue"in e)this.fe(t,15),t.de(es(e.integerValue));else if("doubleValue"in e){let n=es(e.doubleValue);isNaN(n)?this.fe(t,13):(this.fe(t,15),J(n)?t.de(0):t.de(n))}else if("timestampValue"in e){let n=e.timestampValue;this.fe(t,20),"string"==typeof n?t._e(n):(t._e(`${n.seconds||""}`),t.de(n.nanos||0))}else if("stringValue"in e)this.we(e.stringValue,t),this.me(t);else if("bytesValue"in e)this.fe(t,30),t.ge(er(e.bytesValue)),this.me(t);else if("referenceValue"in e)this.ye(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.fe(t,45),t.de(n.latitude||0),t.de(n.longitude||0)}else"mapValue"in e?ey(e)?this.fe(t,Number.MAX_SAFE_INTEGER):(this.pe(e.mapValue,t),this.me(t)):"arrayValue"in e?(this.Ie(e.arrayValue,t),this.me(t)):v()}we(e,t){this.fe(t,25),this.Te(e,t)}Te(e,t){t._e(e)}pe(e,t){let n=e.fields||{};for(let e of(this.fe(t,55),Object.keys(n)))this.we(e,t),this.he(n[e],t)}Ie(e,t){let n=e.values||[];for(let e of(this.fe(t,50),n))this.he(e,t)}ye(e,t){this.fe(t,37),$.fromName(e).path.forEach(e=>{this.fe(t,60),this.Te(e,t)})}fe(e,t){e.de(t)}me(e){e.de(2)}}tP.Ee=new tP;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t${constructor(){this.Ze=new tB}addToCollectionParentIndex(e,t){return this.Ze.add(t),G.resolve()}getCollectionParents(e,t){return G.resolve(this.Ze.getEntries(t))}addFieldIndex(e,t){return G.resolve()}deleteFieldIndex(e,t){return G.resolve()}getDocumentsMatchingTarget(e,t){return G.resolve(null)}getIndexType(e,t){return G.resolve(0)}getFieldIndexes(e,t){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,t){return G.resolve(B.min())}getMinOffsetFromCollectionGroup(e,t){return G.resolve(B.min())}updateCollectionGroup(e,t,n){return G.resolve()}updateIndexEntries(e,t){return G.resolve()}}class tB{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new eU(M.comparator),r=!s.has(n);return this.index[t]=s.add(n),r}has(e){let t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new eU(M.comparator)).toArray()}}new Uint8Array(0);class tq{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new tq(e,tq.DEFAULT_COLLECTION_PERCENTILE,tq.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tq.DEFAULT_COLLECTION_PERCENTILE=10,tq.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,tq.DEFAULT=new tq(41943040,tq.DEFAULT_COLLECTION_PERCENTILE,tq.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),tq.DISABLED=new tq(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tK{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Vn(){return new tK(0)}static Sn(){return new tK(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tG{constructor(){this.changes=new tw(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,eq.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?G.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tQ{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tj{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&tu(n.mutation,e,e$.empty(),V.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,tS()).next(()=>t))}getLocalViewOfDocuments(e,t,n=tS()){let s=tA();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,n).next(e=>{let t=tT();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=tA();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,tS()))}populateOverlays(e,t,n){let s=[];return n.forEach(e=>{t.has(e)||s.push(e)}),this.documentOverlayCache.getOverlays(e,s).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,s){let r=tv,i=tA(),a=tA();return t.forEach((e,t)=>{let a=n.get(t.key);s.has(t.key)&&(void 0===a||a.mutation instanceof td)?r=r.insert(t.key,t):void 0!==a?(i.set(t.key,a.mutation.getFieldMask()),tu(a.mutation,t,a.mutation.getFieldMask(),V.now())):i.set(t.key,e$.empty())}),this.recalculateAndSaveOverlays(e,r).next(e=>(e.forEach((e,t)=>i.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new tQ(t,null!==(n=i.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=tA(),s=new eO((e,t)=>e-t),r=tS();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let r of e)r.keys().forEach(e=>{let i=t.get(e);if(null===i)return;let a=n.get(e)||e$.empty();a=r.applyToLocalView(i,a),n.set(e,a);let o=(s.get(r.batchId)||tS()).add(e);s=s.insert(r.batchId,o)})}).next(()=>{let i=[],a=s.getReverseIterator();for(;a.hasNext();){let s=a.getNext(),o=s.key,l=s.value,u=tA();l.forEach(e=>{if(!r.has(e)){let s=tl(t.get(e),n.get(e));null!==s&&u.set(e,s),r=r.add(e)}}),i.push(this.documentOverlayCache.saveOverlays(e,o,u))}return G.waitFor(i)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n){return $.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):null!==t.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next(r=>{let i=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-r.size):G.resolve(tA()),a=-1,o=r;return i.next(t=>G.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),r.get(t)?G.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,r)).next(()=>this.computeViews(e,o,t,tS())).next(e=>({batchId:a,changes:tI(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $(t)).next(e=>{let t=tT();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n){let s=t.collectionGroup,r=tT();return this.indexManager.getCollectionParents(e,s).next(i=>G.forEach(i,i=>{var a;let o=(a=i.child(s),new ez(a,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.getDocumentsMatchingCollectionQuery(e,o,n).next(e=>{e.forEach((e,t)=>{r=r.insert(e,t)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,t,n){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s))).next(e=>{s.forEach((t,n)=>{let s=n.getKey();null===e.get(s)&&(e=e.insert(s,eq.newInvalidDocument(s)))});let n=tT();return e.forEach((e,r)=>{let i=s.get(e);void 0!==i&&tu(i.mutation,r,e$.empty(),V.now()),e1(t,r)&&(n=n.insert(e,r))}),n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tz{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,t){return G.resolve(this.es.get(t))}saveBundleMetadata(e,t){return this.es.set(t.id,{id:t.id,version:t.version,createTime:t_(t.createTime)}),G.resolve()}getNamedQuery(e,t){return G.resolve(this.ns.get(t))}saveNamedQuery(e,t){return this.ns.set(t.name,{name:t.name,query:function(e){let t=function(e){var t,n,s,r,i,a,o,l;let u,h=function(e){let t=function(e){let t=M.fromString(e);return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)||v(),t}(e);return 4===t.length?M.emptyPath():(t.length>4&&"documents"===t.get(4)||v(),t.popFirst(5))}(e.parent),c=e.structuredQuery,d=c.from?c.from.length:0,f=null;if(d>0){1===d||v();let e=c.from[0];e.allDescendants?f=e.collectionId:h=h.child(e.collectionId)}let m=[];c.where&&(m=function(e){var t;let n=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=tV(e.unaryFilter.field);return eI.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=tV(e.unaryFilter.field);return eI.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let s=tV(e.unaryFilter.field);return eI.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let r=tV(e.unaryFilter.field);return eI.create(r,"!=",{nullValue:"NULL_VALUE"});default:return v()}}(t):void 0!==t.fieldFilter?eI.create(tV(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?eA.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return v()}}(t.compositeFilter.op)):v()}(e);return n instanceof eA&&eN(t=n)&&eC(t)?n.getFilters():[n]}(c.where));let p=[];c.orderBy&&(p=c.orderBy.map(e=>new eV(tV(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let g=null;c.limit&&(g=null==(u="object"==typeof(t=c.limit)?t.value:t)?null:u);let y=null;c.startAt&&(y=function(e){let t=!!e.before,n=e.values||[];return new ew(n,t)}(c.startAt));let w=null;return c.endAt&&(w=function(e){let t=!e.before,n=e.values||[];return new ew(n,t)}(c.endAt)),n=h,s=f,r=p,i=m,a=g,o=y,l=w,new ez(n,s,r,i,a,"F",o,l)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?eY(t,t.limit,"L"):t}(t.bundledQuery),readTime:t_(t.readTime)}),G.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tH{constructor(){this.overlays=new eO($.comparator),this.ss=new Map}getOverlay(e,t){return G.resolve(this.overlays.get(t))}getOverlays(e,t){let n=tA();return G.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,s)=>{this.ce(e,t,s)}),G.resolve()}removeOverlaysForBatchId(e,t,n){let s=this.ss.get(n);return void 0!==s&&(s.forEach(e=>this.overlays=this.overlays.remove(e)),this.ss.delete(n)),G.resolve()}getOverlaysForCollection(e,t,n){let s=tA(),r=t.length+1,i=new $(t.child("")),a=this.overlays.getIteratorFrom(i);for(;a.hasNext();){let e=a.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===r&&e.largestBatchId>n&&s.set(e.getKey(),e)}return G.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let r=new eO((e,t)=>e-t),i=this.overlays.getIterator();for(;i.hasNext();){let e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=r.get(e.largestBatchId);null===t&&(t=tA(),r=r.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=tA(),o=r.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=s)););return G.resolve(a)}ce(e,t,n){let s=this.overlays.get(n.key);if(null!==s){let e=this.ss.get(s.largestBatchId).delete(n.key);this.ss.set(s.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new tM(t,n));let r=this.ss.get(t);void 0===r&&(r=tS(),this.ss.set(t,r)),this.ss.set(t,r.add(n.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tX{constructor(){this.rs=new eU(tW.os),this.us=new eU(tW.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,t){let n=new tW(e,t);this.rs=this.rs.add(n),this.us=this.us.add(n)}hs(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.ls(new tW(e,t))}fs(e,t){e.forEach(e=>this.removeReference(e,t))}ds(e){let t=new $(new M([])),n=new tW(t,e),s=new tW(t,e+1),r=[];return this.us.forEachInRange([n,s],e=>{this.ls(e),r.push(e.key)}),r}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){let t=new $(new M([])),n=new tW(t,e),s=new tW(t,e+1),r=tS();return this.us.forEachInRange([n,s],e=>{r=r.add(e.key)}),r}containsKey(e){let t=new tW(e,0),n=this.rs.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class tW{constructor(e,t){this.key=e,this.gs=t}static os(e,t){return $.comparator(e.key,t.key)||x(e.gs,t.gs)}static cs(e,t){return x(e.gs,t.gs)||$.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tY{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ys=1,this.ps=new eU(tW.os)}checkEmpty(e){return G.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,s){let r=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let i=new tO(r,t,n,s);for(let t of(this.mutationQueue.push(i),s))this.ps=this.ps.add(new tW(t.key,r)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return G.resolve(i)}lookupMutationBatch(e,t){return G.resolve(this.Is(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.Ts(t+1),s=n<0?0:n;return G.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(0===this.mutationQueue.length?-1:this.ys-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new tW(t,0),s=new tW(t,Number.POSITIVE_INFINITY),r=[];return this.ps.forEachInRange([n,s],e=>{let t=this.Is(e.gs);r.push(t)}),G.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new eU(x);return t.forEach(e=>{let t=new tW(e,0),s=new tW(e,Number.POSITIVE_INFINITY);this.ps.forEachInRange([t,s],e=>{n=n.add(e.gs)})}),G.resolve(this.Es(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,s=n.length+1,r=n;$.isDocumentKey(r)||(r=r.child(""));let i=new tW(new $(r),0),a=new eU(x);return this.ps.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===s&&(a=a.add(e.gs)),!0)},i),G.resolve(this.Es(a))}Es(e){let t=[];return e.forEach(e=>{let n=this.Is(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.As(t.batchId,"removed")||v(),this.mutationQueue.shift();let n=this.ps;return G.forEach(t.mutations,s=>{let r=new tW(s.key,t.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ps=n})}Pn(e){}containsKey(e,t){let n=new tW(t,0),s=this.ps.firstAfterOrEqual(n);return G.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}As(e,t){return this.Ts(e)}Ts(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Is(e){let t=this.Ts(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tJ{constructor(e){this.Rs=e,this.docs=new eO($.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,s=this.docs.get(n),r=s?s.size:0,i=this.Rs(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-r,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return G.resolve(n?n.document.mutableCopy():eq.newInvalidDocument(t))}getEntries(e,t){let n=tv;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():eq.newInvalidDocument(e))}),G.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let r=tv,i=t.path,a=new $(i.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!i.isPrefixOf(e.path))break;e.path.length>i.length+1||0>=function(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=$.comparator(e.documentKey,t.documentKey))?n:x(e.largestBatchId,t.largestBatchId)}(new B(a.readTime,a.key,-1),n)||(s.has(a.key)||e1(t,a))&&(r=r.insert(a.key,a.mutableCopy()))}return G.resolve(r)}getAllFromCollectionGroup(e,t,n,s){v()}Ps(e,t){return G.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new tZ(this)}getSize(e){return G.resolve(this.size)}}class tZ extends tG{constructor(e){super(),this.Xn=e}applyChanges(e){let t=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?t.push(this.Xn.addEntry(e,s)):this.Xn.removeEntry(n)}),G.waitFor(t)}getFromCache(e,t){return this.Xn.getEntry(e,t)}getAllFromCache(e,t){return this.Xn.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e){this.persistence=e,this.vs=new tw(e=>eQ(e),ej),this.lastRemoteSnapshotVersion=O.min(),this.highestTargetId=0,this.bs=0,this.Vs=new tX,this.targetCount=0,this.Ss=tK.Vn()}forEachTarget(e,t){return this.vs.forEach((e,n)=>t(n)),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),G.resolve()}xn(e){this.vs.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Ss=new tK(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.xn(t),this.targetCount+=1,G.resolve()}updateTargetData(e,t){return this.xn(t),G.resolve()}removeTargetData(e,t){return this.vs.delete(t.target),this.Vs.ds(t.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,t,n){let s=0,r=[];return this.vs.forEach((i,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.vs.delete(i),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),G.waitFor(r).next(()=>s)}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,t){let n=this.vs.get(t)||null;return G.resolve(n)}addMatchingKeys(e,t,n){return this.Vs.hs(t,n),G.resolve()}removeMatchingKeys(e,t,n){this.Vs.fs(t,n);let s=this.persistence.referenceDelegate,r=[];return s&&t.forEach(t=>{r.push(s.markPotentiallyOrphaned(e,t))}),G.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Vs.ds(t),G.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Vs.ws(t);return G.resolve(n)}containsKey(e,t){return G.resolve(this.Vs.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e,t){var n;this.Ds={},this.overlays={},this.Cs=new j(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new t0(this),this.indexManager=new t$,this.remoteDocumentCache=(n=e=>this.referenceDelegate.ks(e),new tJ(n)),this.Tt=new tU(t),this.$s=new tz(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new tH,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Ds[e.toKey()];return n||(n=new tY(t,this.referenceDelegate),this.Ds[e.toKey()]=n),n}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$s}runTransaction(e,t,n){p("MemoryPersistence","Starting transaction:",e);let s=new t4(this.Cs.next());return this.referenceDelegate.Ms(),n(s).next(e=>this.referenceDelegate.Os(s).next(()=>e)).toPromise().then(e=>(s.raiseOnCommittedEvent(),e))}Fs(e,t){return G.or(Object.values(this.Ds).map(n=>()=>n.containsKey(e,t)))}}class t4 extends q{constructor(e){super(),this.currentSequenceNumber=e}}class t9{constructor(e){this.persistence=e,this.Bs=new tX,this.Ls=null}static qs(e){return new t9(e)}get Us(){if(this.Ls)return this.Ls;throw v()}addReference(e,t,n){return this.Bs.addReference(n,t),this.Us.delete(n.toString()),G.resolve()}removeReference(e,t,n){return this.Bs.removeReference(n,t),this.Us.add(n.toString()),G.resolve()}markPotentiallyOrphaned(e,t){return this.Us.add(t.toString()),G.resolve()}removeTarget(e,t){this.Bs.ds(t.targetId).forEach(e=>this.Us.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Us.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Ms(){this.Ls=new Set}Os(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.Us,n=>{let s=$.fromPath(n);return this.Ks(e,s).next(e=>{e||t.removeEntry(s,O.min())})}).next(()=>(this.Ls=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ks(e,t).next(e=>{e?this.Us.delete(t.toString()):this.Us.add(t.toString())})}ks(e){return 0}Ks(e,t){return G.or([()=>G.resolve(this.Bs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Fs(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Ci=n,this.xi=s}static Ni(e,t){let n=tS(),s=tS();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:s=s.add(e.doc.key)}return new t2(e,t.fromCache,n,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t3{constructor(){this.ki=!1}initialize(e,t){this.$i=e,this.indexManager=t,this.ki=!0}getDocumentsMatchingQuery(e,t,n,s){return this.Mi(e,t).next(r=>r||this.Oi(e,t,s,n)).next(n=>n||this.Fi(e,t))}Mi(e,t){if(eH(t))return G.resolve(null);let n=eW(t);return this.indexManager.getIndexType(e,n).next(s=>0===s?null:(null!==t.limit&&1===s&&(n=eW(t=eY(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(s=>{let r=tS(...s);return this.$i.getDocuments(e,r).next(s=>this.indexManager.getMinOffset(e,n).next(n=>{let i=this.Bi(t,s);return this.Li(t,i,r,n.readTime)?this.Mi(e,eY(t,null,"F")):this.qi(e,i,t,n)}))})))}Oi(e,t,n,s){return eH(t)||s.isEqual(O.min())?this.Fi(e,t):this.$i.getDocuments(e,n).next(r=>{let i=this.Bi(t,r);return this.Li(t,i,n,s)?this.Fi(e,t):(m()<=o.in.DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),e0(t)),this.qi(e,i,t,function(e,t){let n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,r=O.fromTimestamp(1e9===s?new V(n+1,0):new V(n,s));return new B(r,$.empty(),-1)}(s,0)))})}Bi(e,t){let n=new eU((t,n)=>{let s=!1;for(let r of eX(e)){let e=function(e,t,n){let s=e.field.isKeyField()?$.comparator(t.key,n.key):function(e,t,n){let s=t.data.field(e),r=n.data.field(e);return null!==s&&null!==r?eh(s,r):v()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return -1*s;default:return v()}}(r,t,n);if(0!==e)return e;s=s||r.field.isKeyField()}return 0});return t.forEach((t,s)=>{e1(e,s)&&(n=n.add(s))}),n}Li(e,t,n,s){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let r="F"===e.limitType?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Fi(e,t){return m()<=o.in.DEBUG&&p("QueryEngine","Using full collection scan to execute query:",e0(t)),this.$i.getDocumentsMatchingQuery(e,t,B.min())}qi(e,t,n,s){return this.$i.getDocumentsMatchingQuery(e,n,s).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t5{constructor(e,t,n,s){this.persistence=e,this.Ui=t,this.Tt=s,this.Ki=new eO(x),this.Gi=new tw(e=>eQ(e),ej),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.$s=e.getBundleCache(),this.zi(n)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tj(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ki))}}async function t6(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next(r=>(s=r,e.zi(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let r=[],i=[],a=tS();for(let e of s)for(let t of(r.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(n,a).next(e=>({Wi:e,removedBatchIds:r,addedBatchIds:i}))})})}class t8{constructor(){this.activeTargetIds=tk}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class t7{constructor(){this.Ur=new t8,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,t,n){this.Kr[e]=t}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new t8,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{Gr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){for(let e of(p("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.Hr))e(0)}Wr(){for(let e of(p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.Hr))e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nn=null;function ns(){return null===nn?nn=268435456+Math.round(2147483648*Math.random()):nn++,"0x"+nn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let na="WebChannelConnection";class no extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http";this.co=t+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,t,n,s,r){let i=ns(),a=this.fo(e,t);p("RestConnection",`Sending RPC '${e}' ${i}:`,a,n);let o={};return this._o(o,s,r),this.wo(e,a,o,n).then(t=>(p("RestConnection",`Received RPC '${e}' ${i}: `,t),t),t=>{throw y("RestConnection",`RPC '${e}' ${i} failed with error: `,t,"url: ",a,"request:",n),t})}mo(e,t,n,s,r,i){return this.lo(e,t,n,s,r)}_o(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+d,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}fo(e,t){let n=nr[e];return`${this.co}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,t,n,s){let r=ns();return new Promise((i,a)=>{let o=new u.JJ;o.setWithCredentials(!0),o.listenOnce(u.tw.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case u.jK.NO_ERROR:let t=o.getResponseJson();p(na,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(t)),i(t);break;case u.jK.TIMEOUT:p(na,`RPC '${e}' ${r} timed out`),a(new T(E.DEADLINE_EXCEEDED,"Request time out"));break;case u.jK.HTTP_ERROR:let n=o.getStatus();if(p(na,`RPC '${e}' ${r} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(t)>=0?t:E.UNKNOWN}(t.status);a(new T(e,t.message))}else a(new T(E.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new T(E.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{p(na,`RPC '${e}' ${r} completed.`)}});let l=JSON.stringify(s);p(na,`RPC '${e}' ${r} sending request:`,s),o.send(t,"POST",l,n,15)})}yo(e,t,n){let r=ns(),i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=(0,u.UE)(),o=(0,u.FJ)(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new u.zI({})),this._o(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;let h=i.join("");p(na,`Creating RPC '${e}' stream ${r}: ${h}`,l);let c=a.createWebChannel(h,l),d=!1,f=!1,m=new ni({Yr:t=>{f?p(na,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(d||(p(na,`Opening RPC '${e}' stream ${r} transport.`),c.open(),d=!0),p(na,`RPC '${e}' stream ${r} sending:`,t),c.send(t))},Zr:()=>c.close()}),w=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return w(c,u.ii.EventType.OPEN,()=>{f||p(na,`RPC '${e}' stream ${r} transport opened.`)}),w(c,u.ii.EventType.CLOSE,()=>{f||(f=!0,p(na,`RPC '${e}' stream ${r} transport closed`),m.oo())}),w(c,u.ii.EventType.ERROR,t=>{f||(f=!0,y(na,`RPC '${e}' stream ${r} transport errored:`,t),m.oo(new T(E.UNAVAILABLE,"The operation could not be completed")))}),w(c,u.ii.EventType.MESSAGE,t=>{var n;if(!f){let i=t.data[0];i||v();let a=i.error||(null===(n=i[0])||void 0===n?void 0:n.error);if(a){p(na,`RPC '${e}' stream ${r} received error:`,a);let t=a.status,n=function(e){let t=s[e];if(void 0!==t)return function(e){if(void 0===e)return g("GRPC error has no .code"),E.UNKNOWN;switch(e){case s.OK:return E.OK;case s.CANCELLED:return E.CANCELLED;case s.UNKNOWN:return E.UNKNOWN;case s.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case s.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case s.INTERNAL:return E.INTERNAL;case s.UNAVAILABLE:return E.UNAVAILABLE;case s.UNAUTHENTICATED:return E.UNAUTHENTICATED;case s.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case s.NOT_FOUND:return E.NOT_FOUND;case s.ALREADY_EXISTS:return E.ALREADY_EXISTS;case s.PERMISSION_DENIED:return E.PERMISSION_DENIED;case s.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case s.ABORTED:return E.ABORTED;case s.OUT_OF_RANGE:return E.OUT_OF_RANGE;case s.UNIMPLEMENTED:return E.UNIMPLEMENTED;case s.DATA_LOSS:return E.DATA_LOSS;default:return v()}}(t)}(t),i=a.message;void 0===n&&(n=E.INTERNAL,i="Unknown error status: "+t+" with message "+a.message),f=!0,m.oo(new T(n,i)),c.close()}else p(na,`RPC '${e}' stream ${r} received:`,i),m.uo(i)}}),w(o,u.ju.STAT_EVENT,t=>{t.stat===u.kN.PROXY?p(na,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===u.kN.NOPROXY&&p(na,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{m.ro()},0),m}}function nl(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(e){return new tb(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,t,n=1e3,s=1.5,r=6e4){this.Ys=e,this.timerId=t,this.po=n,this.Io=s,this.To=r,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}Po(){this.Eo=this.To}vo(e){this.cancel();let t=Math.floor(this.Eo+this.bo()),n=Math.max(0,Date.now()-this.Ro),s=Math.max(0,t-n);s>0&&p("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Eo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,s,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){null!==this.Ao&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){null!==this.Ao&&(this.Ao.cancel(),this.Ao=null)}bo(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,t,n,s,r,i,a,o){this.Ys=e,this.So=n,this.Do=s,this.connection=r,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new nh(e,t)}$o(){return 1===this.state||5===this.state||this.Mo()}Mo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.$o()&&await this.close(0)}Fo(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&null===this.xo&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,t){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,4!==e?this.ko.reset():t&&t.code===E.RESOURCE_EXHAUSTED?(g(t.toString()),g("Using maximum backoff delay to prevent overloading the backend."),this.ko.Po()):t&&t.code===E.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(t)}Go(){}auth(){this.state=1;let e=this.Qo(this.Co),t=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.Co===t&&this.jo(e,n)},t=>{e(()=>{let e=new T(E.UNKNOWN,"Fetching auth token failed: "+t.message);return this.zo(e)})})}jo(e,t){let n=this.Qo(this.Co);this.stream=this.Wo(e,t),this.stream.Xr(()=>{n(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(e=>{n(()=>this.zo(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Oo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return p("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return t=>{this.Ys.enqueueAndForget(()=>this.Co===e?t():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nd extends nc{constructor(e,t,n,s,r,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,i),this.Tt=r,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,t){return this.connection.yo("Write",e,t)}onMessage(e){var t,n;if(e.streamToken||v(),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();let s=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||v(),t.map(e=>{let t;return(t=e.updateTime?t_(e.updateTime):t_(n)).isEqual(O.min())&&(t=t_(n)),new tr(t,e.transformResults||[])})):[]),r=t_(e.commitTime);return this.listener.eu(r,s)}return e.writeResults&&0!==e.writeResults.length&&v(),this.Zo=!0,this.listener.nu()}su(){var e;let t={};t.database=(e=this.Tt,new M(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()),this.qo(t)}tu(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var n;let s;if(t instanceof tc)s={update:tL(e,t.key,t.value)};else if(t instanceof tg)s={delete:tx(e,t.key)};else if(t instanceof td)s={update:tL(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof ty))return v();s={verify:tx(e,t.key)}}return t.fieldTransforms.length>0&&(s.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof e5)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof e6)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof e7)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof tt)return{fieldPath:t.field.canonicalString(),increment:n.It};throw v()})(0,e))),t.precondition.isNone||(s.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:tD(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:v()),s})(this.Tt,e))};this.qo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf extends class{}{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.Tt=s,this.iu=!1}ru(){if(this.iu)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,t,n){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.lo(e,t,n,s,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(E.UNKNOWN,e.toString())})}mo(e,t,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.mo(e,t,n,r,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(E.UNKNOWN,e.toString())})}terminate(){this.iu=!0}}class nm{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){0===this.ou&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){"Online"===this.state?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,"Online"===e&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(g(t),this.cu=!1):p("OnlineStateTracker",t)}du(){null!==this.uu&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,t,n,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=r,this.yu.Gr(e=>{n.enqueueAndForget(async()=>{nw(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.mu.add(4),await ny(e),e.pu.set("Unknown"),e.mu.delete(4),await ng(e)}(this))})}),this.pu=new nm(n,s)}}async function ng(e){if(nw(e))for(let t of e.gu)await t(!0)}async function ny(e){for(let t of e.gu)await t(!1)}function nw(e){return 0===e.mu.size}async function nv(e,t,n){if(!Q(t))throw t;e.mu.add(1),await ny(e),e.pu.set("Offline"),n||(n=()=>{var t;return(t=e.localStore).persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ns.getLastRemoteSnapshotVersion(e))}),e.asyncQueue.enqueueRetryable(async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),e.mu.delete(1),await ng(e)})}function nE(e,t){return t().catch(n=>nv(e,n,t))}async function nT(e){let t=n_(e),n=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;nw(e)&&e._u.length<10;)try{let s=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===s){0===e._u.length&&t.Bo();break}n=s.batchId,function(e,t){e._u.push(t);let n=n_(e);n.Mo()&&n.Xo&&n.tu(t.mutations)}(e,s)}catch(t){await nv(e,t)}nI(e)&&nA(e)}function nI(e){return nw(e)&&!n_(e).$o()&&e._u.length>0}function nA(e){n_(e).start()}async function nC(e){n_(e).su()}async function nN(e){let t=n_(e);for(let n of e._u)t.tu(n.mutations)}async function nS(e,t,n){let s=e._u.shift(),r=tF.from(s,t,n);await nE(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await nT(e)}async function nk(e,t){t&&n_(e).Xo&&await async function(e,t){var n;if(function(e){switch(e){default:return v();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}(n=t.code)&&n!==E.ABORTED){let n=e._u.shift();n_(e).Fo(),await nE(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await nT(e)}}(e,t),nI(e)&&nA(e)}async function nb(e,t){e.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");let n=nw(e);e.mu.add(3),await ny(e),n&&e.pu.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.mu.delete(3),await ng(e)}async function nD(e,t){t?(e.mu.delete(2),await ng(e)):t||(e.mu.add(2),await ny(e),e.pu.set("Unknown"))}function n_(e){var t,n,s;return e.Eu||(e.Eu=(t=e.datastore,n=e.asyncQueue,s={Xr:nC.bind(null,e),no:nk.bind(null,e),nu:nN.bind(null,e),eu:nS.bind(null,e)},t.ru(),new nd(n,t.connection,t.authCredentials,t.appCheckCredentials,t.Tt,s)),e.gu.push(async t=>{t?(e.Eu.Fo(),await nT(e)):(await e.Eu.stop(),e._u.length>0&&(p("RemoteStore",`Stopping write stream with ${e._u.length} pending writes`),e._u=[]))})),e.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e,t,n,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=r,this.deferred=new I,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,s,r){let i=Date.now()+n,a=new nR(e,t,i,s,r);return a.start(n),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new T(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nx(e,t){if(g("AsyncQueue",`${t}: ${e}`),Q(e))return new T(E.UNAVAILABLE,`${t}: ${e}`);throw e}class nL{constructor(){this.queries=new tw(e=>eZ(e),eJ),this.onlineState="Unknown",this.vu=new Set}}class nV{constructor(e,t,n,s,r,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=i,this.rc={},this.oc=new tw(e=>eZ(e),eJ),this.uc=new Map,this.cc=new Set,this.ac=new eO($.comparator),this.hc=new Map,this.lc=new tX,this.fc={},this.dc=new Map,this._c=tK.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return!0===this.wc}}async function nO(e,t,n){let s=function(e){let t=e;return t.remoteStore.remoteSyncer.applySuccessfulWrite=nM.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=nU.bind(null,t),t}(e);try{var r,i;let e;let a=await function(e,t){let n,s;let r=V.now(),i=t.reduce((e,t)=>e.add(t.key),tS());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=tv,l=tS();return e.ji.getEntries(a,i).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(s=>{n=s;let i=[];for(let e of t){let t=function(e,t){let n=null;for(let s of e.fieldTransforms){let e=t.data.field(s.field),r=e3(s.transform,e||null);null!=r&&(null===n&&(n=eB.empty()),n.set(s.field,r))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&i.push(new td(e.key,t,function e(t){let n=[];return W(t.fields,(t,s)=>{let r=new P([t]);if(ep(s)){let t=e(s.mapValue).fields;if(0===t.length)n.push(r);else for(let e of t)n.push(r.child(e))}else n.push(r)}),new e$(n)}(t.value.mapValue),ti.exists(!0)))}return e.mutationQueue.addMutationBatch(a,r,i,t)}).next(t=>{s=t;let r=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,r)})}).then(()=>({batchId:s.batchId,changes:tI(n)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(a.batchId),r=s,i=a.batchId,(e=r.fc[r.currentUser.toKey()])||(e=new eO(x)),e=e.insert(i,n),r.fc[r.currentUser.toKey()]=e,await nB(s,a.changes),await nT(s.remoteStore)}catch(t){let e=nx(t,"Failed to persist write");n.reject(e)}}function nF(e,t,n){let s=e;if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){let e=[];s.oc.forEach((n,s)=>{let r=s.view.bu(t);r.snapshot&&e.push(r.snapshot)}),function(e,t){let n=e;n.onlineState=t;let s=!1;n.queries.forEach((e,n)=>{for(let e of n.listeners)e.bu(t)&&(s=!0)}),s&&function(e){e.vu.forEach(e=>{e.next()})}(n)}(s.eventManager,t),e.length&&s.rc.Ho(e),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function nM(e,t){var n;let s=t.batch.batchId;try{let r=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let s=t.batch.keys(),r=n.ji.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,s){let r=n.batch,i=r.keys(),a=G.resolve();return i.forEach(e=>{a=a.next(()=>s.getEntry(t,e)).next(t=>{let i=n.docVersions.get(e);null!==i||v(),0>t.version.compareTo(i)&&(r.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),s.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,r))})(n,e,t,r).next(()=>r.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=tS();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,s))});n$(e,s,null),nP(e,s),e.sharedClientState.updateMutationState(s,"acknowledged"),await nB(e,r)}catch(e){await K(e)}}async function nU(e,t,n){var s;try{let r=await (s=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return s.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||v(),n=t.keys(),s.mutationQueue.removeMutationBatch(e,t))).next(()=>s.mutationQueue.performConsistencyCheck(e)).next(()=>s.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>s.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>s.localDocuments.getDocuments(e,n))});n$(e,t,n),nP(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await nB(e,r)}catch(e){await K(e)}}function nP(e,t){(e.dc.get(t)||[]).forEach(e=>{e.resolve()}),e.dc.delete(t)}function n$(e,t,n){let s=e,r=s.fc[s.currentUser.toKey()];if(r){let e=r.get(t);e&&(n?e.reject(n):e.resolve(),r=r.remove(t)),s.fc[s.currentUser.toKey()]=r}}async function nB(e,t,n){let s=[],r=[],i=[];e.oc.isEmpty()||(e.oc.forEach((a,o)=>{i.push(e.mc(o,t,n).then(t=>{if((t||n)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){s.push(t);let e=t2.Ni(o.targetId,t);r.push(e)}}))}),await Promise.all(i),e.rc.Ho(s),await async function(e,t){let n=e;try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>G.forEach(t,t=>G.forEach(t.Ci,s=>n.persistence.referenceDelegate.addReference(e,t.targetId,s)).next(()=>G.forEach(t.xi,s=>n.persistence.referenceDelegate.removeReference(e,t.targetId,s)))))}catch(e){if(!Q(e))throw e;p("LocalStore","Failed to update sequence numbers: "+e)}for(let e of t){let t=e.targetId;if(!e.fromCache){let e=n.Ki.get(t),s=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(s);n.Ki=n.Ki.insert(t,r)}}}(e.localStore,r))}async function nq(e,t){let n=e;if(!n.currentUser.isEqual(t)){p("SyncEngine","User change. New user:",t.toKey());let e=await t6(n.localStore,t);n.currentUser=t,n.dc.forEach(e=>{e.forEach(e=>{e.reject(new T(E.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),n.dc.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await nB(n,e.Wi)}}class nK{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=nu(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,t){return null}Rc(e,t){return null}Ec(e){var t,n,s,r;return t=this.persistence,n=new t3,s=e.initialUser,r=this.Tt,new t5(t,n,s,r)}Tc(e){return new t1(t9.qs,this.Tt)}Ic(e){return new t7}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class nG{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>nF(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=nq.bind(null,this.syncEngine),await nD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new nL}createDatastore(e){var t,n,s;let r=nu(e.databaseInfo.databaseId),i=(t=e.databaseInfo,new no(t));return n=e.authCredentials,s=e.appCheckCredentials,new nf(n,s,i,r)}createRemoteStore(e){var t,n,s,r,i;return t=this.localStore,n=this.datastore,s=e.asyncQueue,r=e=>nF(this.syncEngine,e,0),i=nt.C()?new nt:new ne,new np(t,n,s,r,i)}createSyncEngine(e,t){return function(e,t,n,s,r,i,a){let o=new nV(e,t,n,s,r,i);return a&&(o.wc=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){p("RemoteStore","RemoteStore shutting down."),e.mu.add(5),await ny(e),e.yu.shutdown(),e.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nQ{constructor(e,t,n,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=c.UNAUTHENTICATED,this.clientId=R.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{p("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(p("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new I;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=nx(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function nj(e,t){e.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");let n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async e=>{s.isEqual(e)||(await t6(t.localStore,e),s=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function nz(e,t){e.asyncQueue.verifyOperationInProgress();let n=await nH(e);p("FirestoreClient","Initializing OnlineComponentProvider");let s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(e=>nb(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>nb(t.remoteStore,n)),e.onlineComponents=t}async function nH(e){return e.offlineComponents||(p("FirestoreClient","Using default OfflineComponentProvider"),await nj(e,new nK)),e.offlineComponents}async function nX(e){return e.onlineComponents||(p("FirestoreClient","Using default OnlineComponentProvider"),await nz(e,new nG)),e.onlineComponents}let nW=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nY(e,t,n){if(!n)throw new T(E.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function nJ(e){if(!$.isDocumentKey(e))throw new T(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function nZ(e){if($.isDocumentKey(e))throw new T(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function n0(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":v()}function n1(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new T(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=n0(e);throw new T(E.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n4{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new T(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new T(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,s){if(!0===t&&!0===s)throw new T(E.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n9{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new n4({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new T(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new T(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new n4(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new C;switch(e.type){case"gapi":let t=e.client;return new b(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new T(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=nW.get(e);t&&(p("ComponentProvider","Removing Datastore"),nW.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new n5(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new n2(this.firestore,e,this._key)}}class n3{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new n3(this.firestore,e,this._query)}}class n5 extends n3{constructor(e,t,n){super(e,t,new ez(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new n2(this.firestore,null,new $(e))}withConverter(e){return new n5(this.firestore,e,this._path)}}function n6(e,t,...n){if(e=(0,l.m9)(e),nY("collection","path",t),e instanceof n9){let s=M.fromString(t,...n);return nZ(s),new n5(e,null,s)}{if(!(e instanceof n2||e instanceof n5))throw new T(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let s=e._path.child(M.fromString(t,...n));return nZ(s),new n5(e.firestore,null,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n8{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new nh(this,"async_queue_retry"),this.Hc=()=>{let e=nl();e&&p("AsyncQueue","Visibility state changed to "+e.visibilityState),this.ko.Vo()};let e=nl();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;let t=nl();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});let t=new I;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(0!==this.Uc.length){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!Q(e))throw e;p("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){let t=this.qc.then(()=>(this.jc=!0,e().catch(e=>{let t;this.Qc=e,this.jc=!1;let n=(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t);throw g("INTERNAL UNHANDLED ERROR: ",n),e}).then(e=>(this.jc=!1,e))));return this.qc=t,t}enqueueAfterDelay(e,t,n){this.Jc(),this.Wc.indexOf(e)>-1&&(t=0);let s=nR.createAndSchedule(this,e,t,n,e=>this.Xc(e));return this.Gc.push(s),s}Jc(){this.Qc&&v()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(let t of this.Gc)if(t.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{for(let t of(this.Gc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.Gc))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){let t=this.Gc.indexOf(e);this.Gc.splice(t,1)}}class n7 extends n9{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new n8,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||st(this),this._firestoreClient.terminate()}}function se(e,t){let n="object"==typeof e?e:(0,i.Mq)(),s=(0,i.qX)(n,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!s._initialized){let e=(0,l.P0)("firestore");e&&function(e,t,n,s={}){var r;let i=(e=n1(e,n9))._getSettings();if("firestore.googleapis.com"!==i.host&&i.host!==t&&y("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let t,n;if("string"==typeof s.mockUserToken)t=s.mockUserToken,n=c.MOCK_USER;else{t=(0,l.Sg)(s.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);let i=s.mockUserToken.sub||s.mockUserToken.user_id;if(!i)throw new T(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new c(i)}e._authCredentials=new N(new A(t,n))}}(s,...e)}return s}function st(e){var t,n,s,r;let i=e._freezeSettings(),a=(n=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",r=e._persistenceKey,new z(n,s,r,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams));e._firestoreClient=new nQ(e._authCredentials,e._appCheckCredentials,e._queue,a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new sn(ee.fromBase64String(e))}catch(e){throw new T(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new sn(ee.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new T(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new P(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new T(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new T(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return x(this._lat,e._lat)||x(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sa=/^__.*__$/;class so{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new td(e,this.data,this.fieldMask,t,this.fieldTransforms):new tc(e,this.data,t,this.fieldTransforms)}}function sl(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class su{constructor(e,t,n,s,r,i){this.settings=e,this.databaseId=t,this.Tt=n,this.ignoreUndefinedProperties=s,void 0===r&&this.ia(),this.fieldTransforms=r||[],this.fieldMask=i||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new su(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),s=this.oa({path:n,ca:!1});return s.aa(e),s}ha(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),s=this.oa({path:n,ca:!1});return s.ia(),s}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return sm(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(0===e.length)throw this.fa("Document fields must not be empty");if(sl(this.ra)&&sa.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class sh{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.Tt=n||nu(e)}wa(e,t,n,s=!1){return new su({ra:e,methodName:t,_a:n,path:P.emptyPath(),ca:!1,da:s},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function sc(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof V||e instanceof si||e instanceof sn||e instanceof n2||e instanceof sr)}function sd(e,t,n){if(!sc(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let s=n0(n);throw"an object"===s?t.fa(e+" a custom object"):t.fa(e+" "+s)}}let sf=RegExp("[~\\*/\\[\\]]");function sm(e,t,n,s,r){let i=s&&!s.isEmpty(),a=void 0!==r,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${s}`),a&&(l+=` in document ${r}`),l+=")"),new T(E.INVALID_ARGUMENT,o+e+l)}function sp(e,t){var n,s,r,i;let a=n1(e.firestore,n7),o=function(e,t,...n){if(e=(0,l.m9)(e),1==arguments.length&&(t=R.R()),nY("doc","path",t),e instanceof n9){let s=M.fromString(t,...n);return nJ(s),new n2(e,null,new $(s))}{if(!(e instanceof n2||e instanceof n5))throw new T(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let s=e._path.child(M.fromString(t,...n));return nJ(s),new n2(e.firestore,e instanceof n5?e.converter:null,new $(s))}}(e),u=(n=e.converter)?s&&(s.merge||s.mergeFields)?n.toFirestore(t,s):n.toFirestore(t):t;return(r=a,i=[(function(e,t,n,s,r,i={}){let a,o;let u=e.wa(i.merge||i.mergeFields?2:0,t,n,r);sd("Data must be an object, but it was:",u,s);let h=function e(t,n){let s={};return Y(t)?n.path&&n.path.length>0&&n.fieldMask.push(n.path):W(t,(t,r)=>{let i=function t(n,s){if(sc(n=(0,l.m9)(n)))return sd("Unsupported field value:",s,n),e(n,s);if(n instanceof sr)return function(e,t){if(!sl(t.ra))throw t.fa(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.fa(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(n,s),null;if(void 0===n&&s.ignoreUndefinedProperties)return null;if(s.path&&s.fieldMask.push(s.path),n instanceof Array){if(s.settings.ca&&4!==s.ra)throw s.fa("Nested arrays are not supported");return function(e,n){let s=[],r=0;for(let i of e){let e=t(i,n.la(r));null==e&&(e={nullValue:"NULL_VALUE"}),s.push(e),r++}return{arrayValue:{values:s}}}(n,s)}return function(e,t){var n,s,r,i,a;if(null===(e=(0,l.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return n=t.Tt,"number"==typeof(r=s=e)&&Number.isInteger(r)&&!J(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER?e9(s):e4(n,s);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=V.fromDate(e);return{timestampValue:tD(t.Tt,n)}}if(e instanceof V){let n=new V(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:tD(t.Tt,n)}}if(e instanceof si)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof sn)return{bytesValue:(i=t.Tt,a=e._byteString,i.yt?a.toBase64():a.toUint8Array())};if(e instanceof n2){let n=t.databaseId,s=e.firestore._databaseId;if(!s.isEqual(n))throw t.fa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:tR(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.fa(`Unsupported field value: ${n0(e)}`)}(n,s)}(r,n.ua(t));null!=i&&(s[t]=i)}),{mapValue:{fields:s}}}(s,u);if(i.merge)a=new e$(u.fieldMask),o=u.fieldTransforms;else if(i.mergeFields){let e=[];for(let s of i.mergeFields){let r=function(e,t,n){if((t=(0,l.m9)(t))instanceof ss)return t._internalPath;if("string"==typeof t)return function(e,t,n){if(t.search(sf)>=0)throw sm(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ss(...t.split("."))._internalPath}catch(s){throw sm(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}(e,t);throw sm("Field path arguments must be of type string or ",e,!1,void 0,n)}(t,s,n);if(!u.contains(r))throw new T(E.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);(function(e,t){return e.some(e=>e.isEqual(t))})(e,r)||e.push(r)}a=new e$(e),o=u.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=u.fieldTransforms;return new so(new eB(h),a,o)})(function(e){let t=e._freezeSettings(),n=nu(e._databaseId);return new sh(e._databaseId,!!t.ignoreUndefinedProperties,n)}(e.firestore),"addDoc",o._key,u,null!==e.converter,{}).toMutation(o._key,ti.exists(!1))],function(e,t){let n=new I;return e.asyncQueue.enqueueAndForget(async()=>nO(await nX(e).then(e=>e.syncEngine),t,n)),n.promise}((r._firestoreClient||st(r),r._firestoreClient.verifyNotTerminated(),r._firestoreClient),i)).then(()=>o)}!function(e,t=!0){d=i.Jn,(0,i.Xd)(new a.wA("firestore",(e,{instanceIdentifier:n,options:s})=>{let r=e.getProvider("app").getImmediate(),i=new n7(new S(e.getProvider("auth-internal")),new _(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new T(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new H(e.options.projectId,t)}(r,n),r);return s=Object.assign({useFetchStreams:t},s),i._setSettings(s),i},"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(h,"3.9.0",void 0),(0,i.KN)(h,"3.9.0","esm2017")}()}}]);