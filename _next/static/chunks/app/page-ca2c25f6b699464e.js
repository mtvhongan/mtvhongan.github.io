(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7008:function(e,t,i){Promise.resolve().then(i.bind(i,4777)),Promise.resolve().then(i.bind(i,3287)),Promise.resolve().then(i.bind(i,9804)),Promise.resolve().then(i.bind(i,1131)),Promise.resolve().then(i.bind(i,7189))},4777:function(e,t,i){"use strict";i.d(t,{BrandLogos:function(){return r}});var l=i(7437);i(2265);let r=()=>(0,l.jsx)("div",{className:"bg-white py-4 border-y border-gray-200 mb-4",children:(0,l.jsx)("div",{className:"container mx-auto",children:(0,l.jsx)("div",{className:"flex flex-wrap items-center justify-center gap-4 md:gap-8",children:[{id:1,name:"Honda",logoUrl:"https://placehold.co/100x40/red/white?text=HONDA",link:"/brands/honda"},{id:2,name:"Hyundai",logoUrl:"https://placehold.co/100x40/blue/white?text=HYUNDAI",link:"/brands/hyundai"},{id:3,name:"Kasei",logoUrl:"https://placehold.co/100x40/green/white?text=KASEI",link:"/brands/kasei"},{id:4,name:"Mitsu Power",logoUrl:"https://placehold.co/100x40/orange/white?text=MITSU+POWER",link:"/brands/mitsu-power"},{id:5,name:"Takahiro",logoUrl:"https://placehold.co/100x40/purple/white?text=TAKAHIRO",link:"/brands/takahiro"},{id:6,name:"Ryobi",logoUrl:"https://placehold.co/100x40/teal/white?text=RYOBI",link:"/brands/ryobi"},{id:7,name:"Novara",logoUrl:"https://placehold.co/100x40/gray/white?text=NOVARA",link:"/brands/novara"}].map(e=>(0,l.jsx)("a",{href:e.link,className:"inline-block",children:(0,l.jsx)("img",{src:e.logoUrl,alt:e.name,className:"h-8 md:h-10"})},e.id))})})})},3287:function(e,t,i){"use strict";i.d(t,{HeroBanner:function(){return s}});var l=i(7437),r=i(2265),n=i(5475);let s=()=>{let e=(0,n.useRouter)(),t=[{id:1,imageUrl:"https://placehold.co/1200x400/orange/white?text=Thiết+bị+tự+động+h\xf3a",alt:"Thiết bị tự động h\xf3a",link:"/may-moc-thiet-bi"},{id:2,imageUrl:"https://placehold.co/1200x400/blue/white?text=M\xe1y+x\xe2y+dựng",alt:"M\xe1y x\xe2y dựng",link:"/may-xay-dung"},{id:3,imageUrl:"https://placehold.co/1200x400/green/white?text=M\xe1y+n\xf4ng+nghiệp",alt:"M\xe1y n\xf4ng nghiệp",link:"/may-nong-nghiep"}],[i,s]=(0,r.useState)(0);(0,r.useEffect)(()=>{let e=setInterval(()=>{s(e=>e===t.length-1?0:e+1)},5e3);return()=>clearInterval(e)},[t.length]);let o=t=>{e.push(t)};return(0,l.jsxs)("div",{className:"relative h-64 md:h-96 overflow-hidden",children:[(0,l.jsx)("div",{className:"flex transition-transform duration-500 ease-in-out h-full",style:{transform:"translateX(-".concat(100*i,"%)")},children:t.map(e=>(0,l.jsx)("div",{className:"min-w-full h-full relative",children:(0,l.jsx)("div",{role:"button",tabIndex:0,onClick:()=>o(e.link),onKeyDown:t=>{("Enter"===t.key||" "===t.key)&&o(e.link)},className:"cursor-pointer w-full h-full",children:(0,l.jsx)("img",{src:e.imageUrl,alt:e.alt,className:"w-full h-full object-cover"})})},e.id))}),(0,l.jsx)("button",{onClick:()=>{s(e=>0===e?t.length-1:e-1)},className:"absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 w-10 h-10 rounded-full flex items-center justify-center text-gray-700","aria-label":"Previous slide",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,l.jsx)("polyline",{points:"15 18 9 12 15 6"})})}),(0,l.jsx)("button",{onClick:()=>{s(e=>e===t.length-1?0:e+1)},className:"absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 w-10 h-10 rounded-full flex items-center justify-center text-gray-700","aria-label":"Next slide",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,l.jsx)("polyline",{points:"9 18 15 12 9 6"})})}),(0,l.jsx)("div",{className:"absolute bottom-4 left-0 right-0 flex justify-center space-x-2",children:t.map((e,t)=>(0,l.jsx)("button",{onClick:()=>s(t),className:"w-3 h-3 rounded-full transition-colors ".concat(i===t?"bg-blue-700":"bg-white/70"),"aria-label":"Go to slide ".concat(t+1)},t))})]})}},9804:function(e,t,i){"use strict";i.d(t,{ProductTabs:function(){return o}});var l=i(7437),r=i(2265),n=i(7648);let s=e=>{let{id:t,name:i,slug:r,image:s,discountPercentage:o}=e;return(0,l.jsxs)("div",{className:"border border-gray-200 rounded overflow-hidden bg-white relative",children:[o&&(0,l.jsxs)("div",{className:"absolute top-3 left-3 bg-red-500 text-white text-xs font-bold rounded-full w-10 h-10 flex items-center justify-center z-10",children:["-",o,"%"]}),(0,l.jsx)(n.default,{href:"/san-pham/".concat(r),className:"block",children:(0,l.jsx)("div",{className:"p-4 flex justify-center h-48",children:(0,l.jsx)("img",{src:s,alt:i,className:"max-h-full object-contain transition-transform hover:scale-105"})})}),(0,l.jsxs)("div",{className:"p-4",children:[(0,l.jsx)(n.default,{href:"/san-pham/".concat(r),className:"block h-12",children:(0,l.jsx)("h3",{className:"text-blue-700 font-medium hover:text-blue-900 line-clamp-2",children:i})}),(0,l.jsx)("div",{className:"mt-2",children:(0,l.jsx)("div",{className:"text-blue-700 font-bold",children:"Li\xean hệ"})}),(0,l.jsx)("div",{className:"mt-3",children:(0,l.jsxs)("button",{className:"w-full bg-blue-800 text-white py-2 px-4 rounded flex items-center justify-center hover:bg-blue-900",onClick:()=>{console.log("Add to cart:",t)},children:[(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"mr-2",children:[(0,l.jsx)("circle",{cx:"9",cy:"21",r:"1"}),(0,l.jsx)("circle",{cx:"20",cy:"21",r:"1"}),(0,l.jsx)("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]}),"Th\xeam v\xe0o giỏ"]})})]})]})},o=()=>{let[e,t]=(0,r.useState)("discounted");return(0,l.jsxs)("div",{className:"container mx-auto my-8",children:[(0,l.jsx)("div",{className:"border-b-2 border-gray-200 mb-6",children:(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)("button",{className:"py-3 px-6 font-bold text-sm uppercase ".concat("discounted"===e?"border-2 border-b-0 border-gray-200 rounded-t text-blue-700":"text-gray-600 hover:text-blue-700"),onClick:()=>t("discounted"),children:"SẢN PHẨM C\xd3 KHUYẾN M\xc3I"}),(0,l.jsx)("button",{className:"py-3 px-6 font-bold text-sm uppercase ".concat("bestsellers"===e?"border-2 border-b-0 border-gray-200 rounded-t text-blue-700":"text-gray-600 hover:text-blue-700"),onClick:()=>t("bestsellers"),children:"SẢN PHẨM B\xc1N CHẠY NHẤT"})]})}),(0,l.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:("discounted"===e?[{id:1,name:"M\xe1y bắt v\xedt HYUNDAI HBV2030",slug:"may-bat-vit-hyundai-hbv2030",image:"https://placehold.co/300x300/blue/white?text=Screwdriver",price:456e3,originalPrice:494e3,discountPercentage:8},{id:2,name:"B\xecnh xịt điện TAKAHIRO RT-20N (20L - 8Ah)",slug:"binh-xit-dien-takahiro-rt-20n",image:"https://placehold.co/300x300/green/white?text=Sprayer+1",price:754e3,originalPrice:null,discountPercentage:null},{id:3,name:"B\xecnh xịt điện MITSU POWER 20MS-8Li (20L, Pin 8Ah)",slug:"binh-xit-dien-mitsu-power-20ms-8li",image:"https://placehold.co/300x300/teal/white?text=Sprayer+2",price:104e4,originalPrice:null,discountPercentage:null},{id:4,name:"M\xe1y khoan b\xfaa 13mm HYUNDAI HKV113",slug:"may-khoan-bua-13mm-hyundai-hkv113",image:"https://placehold.co/300x300/red/white?text=Drill",price:98e4,originalPrice:106e4,discountPercentage:8}]:[{id:5,name:"M\xe1y cắt cỏ HONDA GX35",slug:"may-cat-co-honda-gx35",image:"https://placehold.co/300x300/orange/white?text=Lawn+Mower",price:245e4,originalPrice:null,discountPercentage:null},{id:6,name:"M\xe1y bơm nước HYUNDAI HD15L",slug:"may-bom-nuoc-hyundai-hd15l",image:"https://placehold.co/300x300/blue/white?text=Water+Pump",price:175e4,originalPrice:19e5,discountPercentage:8},{id:3,name:"B\xecnh xịt điện MITSU POWER 20MS-8Li (20L, Pin 8Ah)",slug:"binh-xit-dien-mitsu-power-20ms-8li",image:"https://placehold.co/300x300/teal/white?text=Sprayer+2",price:104e4,originalPrice:null,discountPercentage:null},{id:7,name:"M\xe1y ph\xe1t điện KASEI KS3000",slug:"may-phat-dien-kasei-ks3000",image:"https://placehold.co/300x300/purple/white?text=Generator",price:489e4,originalPrice:52e5,discountPercentage:6}]).map(e=>(0,l.jsx)(s,{id:e.id,name:e.name,slug:e.slug,image:e.image,price:e.price,originalPrice:e.originalPrice||void 0,discountPercentage:e.discountPercentage||void 0},e.id))}),(0,l.jsxs)("div",{className:"flex justify-between mt-8",children:[(0,l.jsxs)("button",{className:"border border-gray-300 rounded px-4 py-2 text-gray-600 hover:bg-gray-100 flex items-center",children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"mr-2",children:(0,l.jsx)("polyline",{points:"15 18 9 12 15 6"})}),"Previous"]}),(0,l.jsxs)("button",{className:"border border-gray-300 rounded px-4 py-2 text-gray-600 hover:bg-gray-100 flex items-center",children:["Next",(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"ml-2",children:(0,l.jsx)("polyline",{points:"9 18 15 12 9 6"})})]})]})]})}}},function(e){e.O(0,[726,557,971,117,744],function(){return e(e.s=7008)}),_N_E=e.O()}]);