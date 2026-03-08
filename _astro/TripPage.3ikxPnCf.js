import{r as m}from"./index.DiEladB3.js";var u={exports:{}},x={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y;function w(){if(y)return x;y=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function r(d,c,i){var l=null;if(i!==void 0&&(l=""+i),c.key!==void 0&&(l=""+c.key),"key"in c){i={};for(var h in c)h!=="key"&&(i[h]=c[h])}else i=c;return c=i.ref,{$$typeof:a,type:d,key:l,ref:c!==void 0?c:null,props:i}}return x.Fragment=s,x.jsx=r,x.jsxs=r,x}var b;function M(){return b||(b=1,u.exports=w()),u.exports}var e=M();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=(...a)=>a.filter((s,r,d)=>!!s&&s.trim()!==""&&d.indexOf(s)===r).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,r,d)=>d?d.toUpperCase():r.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=a=>{const s=C(a);return s.charAt(0).toUpperCase()+s.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=a=>{for(const s in a)if(s.startsWith("aria-")||s==="role"||s==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=m.forwardRef(({color:a="currentColor",size:s=24,strokeWidth:r=2,absoluteStrokeWidth:d,className:c="",children:i,iconNode:l,...h},p)=>m.createElement("svg",{ref:p,...$,width:s,height:s,stroke:a,strokeWidth:d?Number(r)*24/Number(s):r,className:f("lucide",c),...!i&&!A(h)&&{"aria-hidden":"true"},...h},[...l.map(([t,n])=>m.createElement(t,n)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o=(a,s)=>{const r=m.forwardRef(({className:d,...c},i)=>m.createElement(Q,{ref:i,iconNode:s,className:f(`lucide-${_(g(a))}`,`lucide-${a}`,d),...c}));return r.displayName=g(a),r};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=[["path",{d:"M10 4 8 6",key:"1rru8s"}],["path",{d:"M17 19v2",key:"ts1sot"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M7 19v2",key:"12npes"}],["path",{d:"M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",key:"14ym8i"}]],q=o("bath",R);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["path",{d:"M2 4v16",key:"vw9hq8"}],["path",{d:"M2 8h18a2 2 0 0 1 2 2v10",key:"1dgv2r"}],["path",{d:"M2 17h20",key:"18nfp3"}],["path",{d:"M6 8v9",key:"1yriud"}]],k=o("bed",E);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],z=o("camera",T);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],L=o("car",H);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],S=o("chevron-right",P);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],I=o("circle-check",B);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],U=o("coffee",J);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],V=o("external-link",F);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8",key:"1sqzm4"}],["path",{d:"M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5",key:"kc0143"}],["rect",{x:"3",y:"7",width:"18",height:"4",rx:"1",key:"1hberx"}]],Y=o("gift",W);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],G=o("map-pin",D);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],Z=o("map",O);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],v=o("moon",X);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],ee=o("sun",K);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],j=o("triangle-alert",te);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]],N=o("wind",ae),ie=()=>{const[a,s]=m.useState(1),[r,d]=m.useState({}),c=t=>{d(n=>({...n,[t]:!n[t]}))},i=t=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t)}`,l=[{day:1,date:"2026.03.20 (Fri/Holiday)",title:"神秘の地底とカルストの風",location:"長門湯本温泉 泊",events:[{time:"06:28",activity:"仲町台 出発",detail:"新幹線で新山口へ",mapQuery:"新山口駅"},{time:"10:45",activity:"新山口駅 到着",detail:"山口旅のスタート",mapQuery:"新山口駅"},{time:"11:30",activity:"レンタカー受取",detail:"トヨタレンタカー新山口駅前店",type:"transport",mapQuery:"トヨタレンタカー新山口駅前店"},{time:"12:00",activity:"ランチタイム",detail:"秋芳洞周辺（瓦そばやごぼう麺がおすすめ）",type:"food",mapQuery:"秋芳洞 飲食店"},{time:"13:00",activity:"秋吉台・秋芳洞",detail:"日本最大級の鍾乳洞とカルスト台地（観光4時間）",type:"spot",mapQuery:"秋芳洞"},{time:"18:00",activity:"長門湯本温泉 チェックイン",detail:"温泉街のそぞろ歩きもおすすめ",type:"hotel",mapQuery:"長門湯本温泉"}],hotel:{area:"長門湯本温泉",bath:"夜 23:00迄 / 朝 06:00〜09:00",checkout:"10:00",amenities:["ハンドタオル","歯ブラシ・歯磨き粉","バスタオル","シャンプー","リンス","ボディーソープ","石鹸","浴衣","ドライヤー","羽毛布団","髭剃り","シャワートイレ","シャワーキャップ","綿棒","くし・ブラシ"]}},{day:2,date:"2026.03.21 (Sat/Holiday)",title:"絶景ブリッジと歴史の街",location:"萩温泉 泊",events:[{time:"09:00",activity:"チェックアウト",detail:"下関エリアへ南下",mapQuery:"下関市"},{time:"10:00",activity:"唐戸市場（昼食）",detail:"祝日の「活きいき馬関街」を満喫",type:"food",mapQuery:"唐戸市場"},{time:"14:00",activity:"角島大橋",detail:"エメラルドグリーンの海を渡る絶景ドライブ",type:"spot",mapQuery:"角島大橋"},{time:"16:00",activity:"元乃隅神社",detail:"123基の鳥居と断崖。夕日の名所",type:"spot",mapQuery:"元乃隅神社"},{time:"18:00",activity:"萩温泉 チェックイン",detail:"歴史ある城下町の温泉郷",type:"hotel",mapQuery:"萩温泉"}],hotel:{area:"萩温泉",bath:"夜 13:00〜23:30 / 朝 05:30〜09:30",checkout:"10:00",amenities:["浴衣","室内用足袋","歯ブラシ","タオル","バスタオル","ボディソープ","シャンプー","コンディショナー","クレンジング","洗顔料","化粧水","乳液","ミネラルウォーター"]}},{day:3,date:"2026.03.22 (Sun)",title:"自然の造形美と帰路の旅",location:"新山口へ",events:[{time:"10:00",activity:"チェックアウト",detail:"北上して須佐エリアへ",mapQuery:"萩市 須佐"},{time:"11:00",activity:"須佐ホルンフェルス",detail:"白黒の縞模様が美しい地層の断崖",type:"spot",mapQuery:"須佐ホルンフェルス"},{time:"13:00",activity:"青海島周辺観光",detail:"クルーズ3時間 ＋ センザキッチンで昼食1時間",type:"spot",mapQuery:"道の駅 センザキッチン"},{time:"18:00",activity:"レンタカー返却",detail:"トヨタレンタカー新山口駅前店",type:"transport",mapQuery:"トヨタレンタカー新山口駅前店"},{time:"18:11",activity:"新山口駅 出発",detail:"新幹線にて帰路へ",mapQuery:"新山口駅"},{time:"22:33",activity:"仲町台 到着",detail:"お疲れ様でした！",mapQuery:"仲町台駅"}],hotel:null}],h=["運転免許証","保険証","スマホ充電器","歩きやすい靴","日焼け止め","羽織もの（洞窟用）"],p=[{title:"足元の装備について",content:"秋芳洞や須佐ホルンフェルスは濡れた岩場や急な階段があります。安全のためサンダルは避け、履き慣れたスニーカーを着用してください。",icon:e.jsx(N,{className:"w-5 h-5 text-blue-500"})},{title:"秋芳洞の気温と服装",content:"洞内は年間を通して約17度です。3月は外気との差があるため、1時間程度の観光で体が冷えないよう薄手の上着が必須です。",icon:e.jsx(N,{className:"w-5 h-5 text-teal-500"})},{title:"祝日の唐戸市場について",content:"2026年3月21日は祝日(春分の日)です。唐戸市場の「馬関街」は非常に混雑が予想されます。遅くとも10時半までには到着することをお勧めします。",icon:e.jsx(j,{className:"w-5 h-5 text-amber-500"})},{title:"給油と移動の注意",content:"角島〜元乃隅〜萩、須佐〜青海島の区間はガソリンスタンドが限られます。山間部や海岸沿いを走るため、早めの給油を推奨します。",icon:e.jsx(L,{className:"w-5 h-5 text-slate-500"})},{title:"長門湯本の夜散策",content:"1泊目の長門湯本温泉は、川沿いの竹林ライトアップが非常に美しいです。3月の夜風はまだ冷たいので、暖かい格好で散策を楽しんでください。",icon:e.jsx(v,{className:"w-5 h-5 text-indigo-400"})}];return e.jsxs("div",{className:"min-h-screen bg-neutral-50 font-sans text-slate-900 pb-20",children:[e.jsxs("header",{className:"relative h-72 bg-slate-900 overflow-hidden shadow-2xl",children:[e.jsx("div",{className:"absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493246507139-91e8bef99c17?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-50"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"}),e.jsxs("div",{className:"relative h-full flex flex-col items-center justify-center text-center px-6",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[e.jsx("div",{className:"h-[1px] w-6 bg-amber-400"}),e.jsx("span",{className:"text-amber-400 text-[10px] font-black tracking-[0.3em] uppercase",children:"Birthday Trip in 2026"}),e.jsx("div",{className:"h-[1px] w-6 bg-amber-400"})]}),e.jsx("h1",{className:"text-4xl font-black text-white mb-2 tracking-tighter",children:"山口・絶景と美食の旅"}),e.jsx("p",{className:"text-white/60 text-xs font-bold tracking-widest uppercase",children:"2026.03.20 - 03.22"})]})]}),e.jsxs("main",{className:"max-w-xl mx-auto px-4 -mt-12 relative z-20",children:[e.jsx("nav",{className:"bg-white/80 backdrop-blur-md rounded-[2rem] shadow-2xl p-2 flex mb-8 border border-white/20",children:[1,2,3].map(t=>e.jsxs("button",{onClick:()=>s(t),className:`flex-1 py-4 text-xs font-black rounded-2xl transition-all duration-500 ${a===t?"bg-slate-900 text-white shadow-xl translate-y-[-2px]":"text-slate-400 hover:text-slate-600"}`,children:["DAY 0",t]},t))}),e.jsx("div",{className:"mb-6 px-4 flex justify-between items-center",children:e.jsxs("div",{children:[e.jsx("span",{className:"text-[10px] font-black text-sky-600 tracking-[0.2em] mb-1 block uppercase",children:l[a-1].date}),e.jsx("h2",{className:"text-2xl font-black text-slate-800 tracking-tight",children:l[a-1].title}),e.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[e.jsx(G,{className:"w-3 h-3 text-sky-600"}),e.jsx("span",{className:"text-xs font-bold text-sky-700 uppercase tracking-widest",children:l[a-1].location})]})]})}),e.jsx("section",{className:"space-y-4 mb-10",children:l[a-1].events.map((t,n)=>e.jsxs("a",{href:i(t.mapQuery),target:"_blank",rel:"noopener noreferrer",className:"group bg-white rounded-3xl p-5 shadow-sm border border-slate-100 flex gap-5 transition-all hover:border-sky-100 hover:shadow-md active:scale-95 block",children:[e.jsxs("div",{className:"flex flex-col items-center w-12 pt-1",children:[e.jsx("span",{className:"text-[10px] font-black text-slate-300 mb-2 uppercase",children:t.time}),e.jsx("div",{className:`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors ${t.type==="spot"?"bg-sky-50 text-sky-600":t.type==="food"?"bg-amber-50 text-amber-600":t.type==="hotel"?"bg-indigo-50 text-indigo-600":"bg-slate-50 text-slate-400"}`,children:t.type==="spot"?e.jsx(z,{className:"w-5 h-5"}):t.type==="food"?e.jsx(U,{className:"w-5 h-5"}):t.type==="hotel"?e.jsx(k,{className:"w-5 h-5"}):e.jsx(S,{className:"w-5 h-5"})})]}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsx("h3",{className:"font-bold text-slate-800 text-lg tracking-tight group-hover:text-sky-700 transition-colors",children:t.activity}),e.jsx(V,{className:"w-3 h-3 text-slate-300 mt-1"})]}),e.jsx("p",{className:"text-sm text-slate-500 mt-0.5 leading-relaxed",children:t.detail})]})]},n))}),l[a-1].hotel&&e.jsxs("section",{className:"bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden mb-10",children:[e.jsxs("div",{className:"bg-gradient-to-br from-indigo-900 to-slate-900 p-8 text-white",children:[e.jsxs("div",{className:"flex justify-between items-start mb-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx(k,{className:"w-5 h-5 text-indigo-300"}),e.jsx("span",{className:"text-[10px] font-black tracking-[0.2em] uppercase text-indigo-200",children:"Accommodation"})]}),e.jsx("h3",{className:"text-2xl font-black tracking-tighter",children:l[a-1].hotel.area})]}),e.jsx("div",{className:"bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10",children:e.jsx("span",{className:"text-[10px] font-bold",children:"OUT 10:00"})})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-white/5 rounded-2xl p-4 border border-white/10",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx(v,{className:"w-4 h-4 text-indigo-300"}),e.jsx("span",{className:"text-[10px] font-black uppercase opacity-60",children:"Night Bath"})]}),e.jsx("p",{className:"text-sm font-bold",children:l[a-1].hotel.bath.split(" / ")[0].replace("夜 ","")})]}),e.jsxs("div",{className:"bg-white/5 rounded-2xl p-4 border border-white/10",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx(ee,{className:"w-4 h-4 text-amber-300"}),e.jsx("span",{className:"text-[10px] font-black uppercase opacity-60",children:"Morning Bath"})]}),e.jsx("p",{className:"text-sm font-bold",children:l[a-1].hotel.bath.split(" / ")[1]?.replace("朝 ","")||"記載なし"})]})]})]}),e.jsxs("div",{className:"p-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsxs("h4",{className:"text-sm font-black text-slate-800 flex items-center gap-2",children:[e.jsx(q,{className:"w-4 h-4 text-indigo-600"}),"AMENITIES"]}),e.jsx("span",{className:"text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-md uppercase tracking-widest",children:"Full List"})]}),e.jsx("div",{className:"grid grid-cols-2 gap-x-6 gap-y-3",children:l[a-1].hotel.amenities.map((t,n)=>e.jsxs("div",{className:"flex items-center gap-3 py-1 group border-b border-slate-50 last:border-0",children:[e.jsx("div",{className:"w-1 h-1 rounded-full bg-indigo-400 group-hover:scale-150 transition-transform"}),e.jsx("span",{className:"text-xs text-slate-600 font-bold tracking-tight",children:t})]},n))})]})]}),e.jsxs("section",{className:"bg-amber-50 rounded-[2.5rem] p-8 border border-amber-100 mb-10 shadow-sm relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 p-8 opacity-10",children:e.jsx(Y,{className:"w-24 h-24"})}),e.jsxs("div",{className:"flex items-center gap-3 mb-6 relative z-10",children:[e.jsx("div",{className:"p-2.5 bg-amber-400 rounded-2xl shadow-lg shadow-amber-200 text-white",children:e.jsx(I,{className:"w-5 h-5"})}),e.jsx("h3",{className:"font-black text-amber-900 text-xl tracking-tight",children:"Packing List"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 relative z-10",children:h.map((t,n)=>e.jsxs("label",{className:"flex items-center gap-3 bg-white/70 p-4 rounded-2xl cursor-pointer hover:bg-white transition-all shadow-sm group",children:[e.jsx("input",{type:"checkbox",className:"w-5 h-5 rounded-lg border-amber-200 text-amber-600 focus:ring-amber-500 transition-all",onChange:()=>c(`pack-${n}`),checked:!!r[`pack-${n}`]}),e.jsx("span",{className:`text-sm font-bold transition-all ${r[`pack-${n}`]?"line-through text-slate-300":"text-slate-700"}`,children:t})]},n))})]}),e.jsxs("section",{className:"mb-12",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6 px-4",children:[e.jsx("div",{className:"p-2 bg-slate-800 rounded-xl text-white",children:e.jsx(j,{className:"w-5 h-5"})}),e.jsx("h3",{className:"font-black text-slate-800 text-xl tracking-tight",children:"Travel Notes"})]}),e.jsx("div",{className:"space-y-4",children:p.map((t,n)=>e.jsxs("div",{className:"bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:"p-1.5 bg-slate-50 rounded-lg",children:t.icon}),e.jsx("h4",{className:"font-black text-slate-800 tracking-tight",children:t.title})]}),e.jsx("p",{className:"text-sm text-slate-500 leading-relaxed font-bold",children:t.content})]},n))})]}),e.jsxs("footer",{className:"text-center px-6",children:[e.jsx("div",{className:"h-[1px] w-12 bg-slate-200 mx-auto mb-6"}),e.jsx("p",{className:"text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] mb-2",children:"Wish you the best birthday trip!"}),e.jsxs("div",{className:"flex justify-center gap-2 text-slate-300",children:[e.jsx(Z,{className:"w-4 h-4"}),e.jsx("span",{className:"text-[10px] font-bold tracking-widest uppercase",children:"Yamaguchi Prefecture"})]})]})]})]})};export{ie as default};
