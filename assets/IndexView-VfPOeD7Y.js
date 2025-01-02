import{a as V}from"./avatar-DUL9sWmc.js";import{_ as g}from"./Section-BweF5O6_.js";import{o as c,c as m,w,a as h,b as t,d as H,e as _,t as u,n as r,u as d,R as S,i as C,r as b,f as k,g as n,h as M,j as Z,k as j,F as y,l as B}from"./index-CW4N_3px.js";const $={key:0,class:"fill-current h-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 16"},A=["d"],x={__name:"Button",props:{secondary:Boolean,href:String,svgd:String,text:String},setup(i){const e=i;return(s,l)=>(c(),m(d(S),{class:r([e.secondary?"bg-surface hover:bg-brand-y text-brand-y hover:text-surface":"bg-brand-y hover:bg-surface text-surface hover:text-brand-y","justify-center font-bold rounded-xl border-brand-y border-2 w-fit flex flex-row flex-wrap items-center gap-x-2 px-5 py-1 transition-all duration-300"]),to:e.href},{default:w(()=>[e.svgd?(c(),h("svg",$,[t("path",{"fill-rule":"evenodd",d:e.svgd,"clip-rule":"evenodd"},null,8,A)])):H("",!0),_(" "+u(e.text),1)]),_:1},8,["class","to"]))}},I=(i,e)=>{const s=i.__vccOpts||i;for(const[l,a]of e)s[l]=a;return s},T={id:"fancybox",class:"z-0 absolute top-0 left-0 right-0 bottom-0"},P={class:"relative z-10 max-w-5xl px-5 sm:px-8 mx-auto grid sm:grid-cols-3 gap-2 sm:gap-0 backdrop-blur-xs"},E={class:"sm:row-span-2 sm:justify-self-end justify-self-center place-self-center"},z={class:"bg-radial from-brand-x/90 to-brand-y/30 to-45% max-w-60 aspect-square rounded-full shadow-[0_0_9px_rgba(0,0,0,0.5)]"},D=["src"],F={class:"py-5 space-y-4 sm:col-span-2"},W={class:"flex flex-row gap-2 flex-wrap"},R={__name:"SectionHero",setup(i){const e=C("icons"),s={style:b(null)},l=a=>{a.stopImmediatePropagation(),s.style.value=`left: ${a.clientX-160}px`};return(a,o)=>(c(),m(g,{id:"hero",onMousemove:l,onTouchmove:l,class:"relative overflow-hidden group"},{default:w(()=>[t("span",T,[t("span",{id:"cursorpulse",style:k(s.style.value),class:"transition-all rounded-3xl duration-300 h-50 group-hover:sm:h-full sm:top-80 group-hover:sm:top-0 absolute top-1/4 bg-gradient-to-r from-transparent via-brand-y/70 to-transparent"},null,4)]),t("div",P,[o[2]||(o[2]=t("div",{class:"sm:col-span-2"},[t("h1",{class:"text-brand-y text-lg sm:text-xl"},[_(" Hello World! I'm "),t("span",{class:"text-transparent w-fit bg-gradient-to-r from-brand-y to-brand-x bg-clip-text text-5xl sm:text-6xl font-bold block"}," Shakil Nawaz ")]),t("p",{class:"text-lg sm:text-xl font-bold"},"A web developer, Specialized in JavaScript and PHP")],-1)),t("div",E,[t("div",z,[t("img",{class:"relative z-10 w-60 object-contain",src:d(V),alt:"avatar"},null,8,D)])]),t("div",F,[o[0]||(o[0]=t("p",null," I love to explore newer technologies and build things upon that. Also love to build user centric websites that actually helps. ",-1)),o[1]||(o[1]=t("p",null," I have skills with WordPress, Elementor, Breakdance Builder, TailwindCSS, Semantic HTML and CSS. Currently exploring Laravel. ",-1)),t("div",W,[n(x,{text:"More About Me",href:"/about",svgd:d(e).about},null,8,["svgd"]),n(x,{secondary:"",text:"Résumé",href:"/resume",svgd:d(e).pdf},null,8,["svgd"])])])])]),_:1}))}},J=I(R,[["__scopeId","data-v-2b3232c5"]]),N={class:"w-12 h-12 aspect-square sm:h-25 sm:w-25 grid place-items-center"},O=["src","alt"],U={__name:"SkillCard",props:{isVisible:{type:Boolean,default:!1},iconSrc:String,iconAlt:String,date:String,title:String,summary:String},setup(i){const e=i;return(s,l)=>(c(),h("div",{class:r({"flex flex-row gap-2 sm:gap-4 transition-all duration-500 relative items-center":!0,"":e.isVisible})},[t("div",N,[t("div",{class:r({"w-2 h-2 shrink-0 bg-surface rounded-full shadow-brand-y shadow-sm grid place-items-center transition-all duration-500":!0,"w-full h-full":e.isVisible})},[t("img",{class:r({"w-0 h-0 transition-all duration-700":!0,"w-7 h-7 sm:w-13 sm:h-12 ":e.isVisible}),src:e.iconSrc,alt:e.iconAlt,loading:"lazy"},null,10,O)],2)]),t("div",{class:r({"w-0 whitespace-nowrap flex flex-col justify-center grow relative gap-0 sm:gap-1 overflow-hidden transition-all duration-400":!0,"w-fit":e.isVisible})},[t("p",{class:r({"w-0 whitespace-nowrap overflow-hidden text-sm sm:text-base transition-all duration-200":!0,"w-full":e.isVisible})},u(e.date),3),t("p",{class:r({"w-0 whitespace-nowrap overflow-hidden text-sm font-bold sm:text-base transition-all duration-400":!0,"w-full":e.isVisible})},u(e.title),3),(c(),h("svg",{xmlns:"http://www.w3.org/2000/svg",class:r({"w-0 h-0.5 stroke-current text-brand-y transition-all duration-400":!0,"w-full":e.isVisible})},l[0]||(l[0]=[t("line",{x1:"0",x2:"100%",fill:"transparent","stroke-width":"4px","stroke-dasharray":"12 5 3 5"},null,-1)]),2)),t("p",{class:r({"w-0 whitespace-nowrap overflow-hidden text-sm sm:text-base transition-all duration-700":!0,"w-full":e.isVisible})},u(e.summary),3)],2)],2))}},q={id:8,name:"vue",iconAlt:"vue logo",date:"December 2024",title:"Vue, Vue Router",summary:"Worked on several project"},Q={id:7,name:"tailwind",iconAlt:"vue logo",date:"December 2024",title:"Vue, Vue Router",summary:"Worked on several project"},K={id:6,name:"laravel",iconAlt:"vue logo",date:"December 2024",title:"Vue, Vue Router",summary:"Worked on several project"},X={id:5,name:"wordpress",iconAlt:"vue logo",date:"December 2024",title:"Vue, Vue Router",summary:"Worked on several project"},G={id:4,name:"php",iconAlt:"vue logo",date:"December 2024",title:"Vue, Vue Router",summary:"Worked on several project"},Y={id:3,name:"js",iconAlt:"vue logo",date:"December 2024",title:"Vue, Vue Router",summary:"Worked on several project"},e2={id:2,name:"css",iconAlt:"css logo",date:"March 2022",title:"CSS, SCSS, Modern CSS with nesting",summary:"Worked on several project"},t2={id:1,name:"html",iconAlt:"html logo",date:"January 2022",title:"HTML, Semantic HTML, HTML5",summary:"Worked on several project"},l2={vue:q,tailwind:Q,laravel:K,wordpress:X,php:G,js:Y,css:e2,html:t2},s2="data:image/svg+xml,%3csvg%20width='46'%20height='40'%20viewBox='0%200%2046%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M28.3118%200.0811768L23%209.28024L17.6882%200.0811768H0L23%2039.9188L46%200.0811768H28.3118Z'%20fill='%2342B883'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M28.3135%200.0811768L23.0016%209.28024L17.6898%200.0811768H9.20068L23.0016%2023.9833L36.8026%200.0811768H28.3135Z'%20fill='%2335495E'/%3e%3c/svg%3e",o2="data:image/svg+xml,%3csvg%20width='56'%20height='34'%20viewBox='0%200%2056%2034'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_93_610'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='56'%20height='34'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%200.208252H56V33.7917H0V0.208252Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_93_610)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M27.9996%200.208252C20.5329%200.208252%2015.8663%203.93976%2013.9996%2011.4028C16.7996%207.67126%2020.0663%206.27195%2023.7996%207.20483C25.9297%207.73657%2027.452%209.28203%2029.1372%2010.9913C31.8823%2013.7764%2035.0597%2017%2041.9996%2017C49.4663%2017%2054.1329%2013.2685%2055.9996%205.80551C53.1996%209.53702%2049.9329%2010.9363%2046.1996%2010.0035C44.0695%209.47172%2042.5472%207.92625%2040.862%206.21701C38.1169%203.43186%2034.9395%200.208252%2027.9996%200.208252ZM14%2017.0008C6.53333%2017.0008%201.86667%2020.7323%200%2028.1953C2.8%2024.4638%206.06666%2023.0645%209.8%2023.9974C11.9301%2024.5302%2013.4524%2026.0746%2015.1376%2027.7838C17.8827%2030.569%2021.0601%2033.7926%2028%2033.7926C35.4667%2033.7926%2040.1333%2030.0611%2042%2022.5981C39.2%2026.3296%2035.9333%2027.7289%2032.2%2026.796C30.0699%2026.2643%2028.5475%2024.7188%2026.8624%2023.0096C24.1173%2020.2244%2020.9398%2017.0008%2014%2017.0008Z'%20fill='%2338BDF8'/%3e%3c/g%3e%3c/svg%3e",a2="data:image/svg+xml,%3csvg%20width='46'%20height='46'%20viewBox='0%200%2046%2046'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%200H38.64C42.7048%200%2046%203.29518%2046%207.36V38.64C46%2042.7048%2042.7048%2046%2038.64%2046H7.36C3.29518%2046%200%2042.7048%200%2038.64V0Z'%20fill='%23663399'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M22.5399%2037.03H25.7139C25.7599%2038.502%2026.2199%2039.422%2027.2319%2039.422C28.2439%2039.422%2028.6119%2038.824%2028.6119%2037.444C28.6119%2036.294%2028.1059%2035.65%2026.8639%2035.052L25.6679%2034.5C23.5519%2033.488%2022.6779%2032.246%2022.6779%2029.762C22.6779%2027.002%2024.4259%2025.07%2027.2779%2025.07C30.1299%2025.07%2031.6479%2027.048%2031.6939%2030.268H28.6119C28.6119%2028.934%2028.3359%2028.014%2027.3239%2028.014C26.4039%2028.014%2025.9439%2028.474%2025.9439%2029.624C25.9439%2030.774%2026.3579%2031.234%2027.4619%2031.694L28.5659%2032.2C30.9119%2033.304%2031.9239%2034.73%2031.9239%2037.398C31.9239%2040.572%2030.1299%2042.32%2027.1859%2042.32C24.2419%2042.32%2022.5859%2040.296%2022.5399%2037.03ZM11.6382%2037.582V29.854C11.6382%2026.772%2013.6162%2025.116%2016.6062%2025.116C19.5502%2025.07%2021.3902%2027.002%2021.2982%2030.268H17.8942C17.9862%2029.026%2017.4342%2028.106%2016.5142%2028.152C15.3642%2028.152%2015.0422%2028.934%2015.0422%2030.406V37.122C15.0422%2038.548%2015.5022%2039.238%2016.5142%2039.284C17.5722%2039.284%2017.9862%2038.226%2017.8942%2037.03H21.2982C21.4822%2040.388%2019.3662%2042.366%2016.3762%2042.32C13.4782%2042.32%2011.6382%2040.71%2011.6382%2037.582ZM36.1561%2037.03H32.9361C32.9821%2040.296%2034.6381%2042.32%2037.5821%2042.32C40.5261%2042.32%2042.3201%2040.572%2042.3201%2037.398C42.3201%2034.73%2041.3081%2033.304%2039.0081%2032.2L37.8581%2031.694C36.7541%2031.234%2036.3861%2030.774%2036.3861%2029.624C36.3861%2028.474%2036.8001%2028.014%2037.7201%2028.014C38.7321%2028.014%2039.0081%2028.934%2039.0541%2030.268H42.1361C42.0441%2027.048%2040.6181%2025.07%2037.7201%2025.07C34.8221%2025.07%2033.1201%2027.002%2033.1201%2029.762C33.1201%2032.246%2033.9481%2033.488%2036.0641%2034.5L37.2601%2035.052C38.5481%2035.65%2039.0081%2036.294%2039.0081%2037.444C39.0081%2038.824%2038.5941%2039.422%2037.6281%2039.422C36.6621%2039.422%2036.1561%2038.502%2036.1561%2037.03Z'%20fill='white'/%3e%3c/svg%3e",i2="data:image/svg+xml,%3csvg%20width='46'%20height='46'%20viewBox='0%200%2046%2046'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='9.96631'%20y='17.6334'%20width='33.7333'%20height='26.0667'%20fill='black'/%3e%3cpath%20d='M46%206.57143C46%202.94687%2043.0531%200%2039.4286%200H6.57143C2.94687%200%200%202.94687%200%206.57143V39.4286C0%2043.0531%202.94687%2046%206.57143%2046H39.4286C43.0531%2046%2046%2043.0531%2046%2039.4286V6.57143ZM18.5746%2042.396C15.1143%2042.396%2013.1121%2040.6094%2012.0853%2038.4429L15.6071%2036.3174C16.2848%2037.5187%2016.9009%2038.5353%2018.3897%2038.5353C19.8067%2038.5353%2020.7103%2037.9808%2020.7103%2035.8143V21.121H25.033V35.8759C25.033%2040.3527%2022.4045%2042.396%2018.5746%2042.396ZM27.3844%2037.9808L30.9062%2035.9478C31.8304%2037.4571%2033.042%2038.5763%2035.1674%2038.5763C36.954%2038.5763%2038.104%2037.683%2038.104%2036.4406C38.104%2034.9621%2036.9335%2034.4384%2034.9518%2033.5656L33.8737%2033.1036C30.7522%2031.779%2028.6884%2030.1054%2028.6884%2026.5835C28.6884%2023.3388%2031.1629%2020.8746%2035.0134%2020.8746C37.7652%2020.8746%2039.7366%2021.8295%2041.1536%2024.3348L37.7857%2026.4911C37.0464%2025.1665%2036.2455%2024.6429%2035.0031%2024.6429C33.7402%2024.6429%2032.9393%2025.4437%2032.9393%2026.4911C32.9393%2027.7848%2033.7402%2028.3085%2035.5987%2029.1196L36.6768%2029.5817C40.3527%2031.1527%2042.4165%2032.7647%2042.4165%2036.379C42.4165%2040.2603%2039.3567%2042.396%2035.2598%2042.396C31.2451%2042.396%2028.6473%2040.4862%2027.3844%2037.9808Z'%20fill='%23F7DF1E'/%3e%3c/svg%3e",r2="data:image/svg+xml,%3csvg%20width='46'%20height='48'%20viewBox='0%200%2046%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_93_621)'%3e%3cpath%20d='M45.8923%2011.071C45.9093%2011.1341%2045.918%2011.199%2045.9182%2011.2643V21.4108C45.9182%2021.5411%2045.8838%2021.669%2045.8186%2021.7817C45.7533%2021.8944%2045.6594%2021.9878%2045.5464%2022.0526L37.0303%2026.9557V36.674C37.0303%2036.9385%2036.8897%2037.1827%2036.6604%2037.3158L18.8837%2047.5493C18.843%2047.5724%2018.7986%2047.5872%2018.7542%2047.6029C18.7376%2047.6084%2018.7218%2047.6186%2018.7043%2047.6232C18.58%2047.656%2018.4494%2047.656%2018.3251%2047.6232C18.3048%2047.6177%2018.2863%2047.6066%2018.2668%2047.5992C18.2262%2047.5844%2018.1836%2047.5714%2018.1448%2047.5493L0.371755%2037.3158C0.258848%2037.251%200.165034%2037.1575%200.0997677%2037.0448C0.0345014%2036.9321%208.9461e-05%2036.8043%200%2036.674L0%206.23453C0%206.16795%200.00924763%206.10321%200.0258934%206.04033C0.031442%206.01906%200.0443886%205.99964%200.0517867%205.97837C0.0656582%205.93953%200.0786049%205.89977%200.0989497%205.8637C0.112821%205.83966%200.133166%205.82024%200.149812%205.79804C0.171081%205.76845%200.190501%205.73793%200.21547%205.71204C0.236739%205.69077%200.264482%205.67505%200.288526%205.65655C0.315344%205.63436%200.339388%205.61031%200.369905%205.59274L9.2578%200.476028C9.37033%200.411276%209.49788%200.377197%209.62771%200.377197C9.75754%200.377197%209.88509%200.411276%209.99762%200.476028L18.8846%205.59274H18.8864C18.916%205.61124%2018.941%205.63436%2018.9678%205.65563C18.9919%205.67412%2019.0187%205.69077%2019.04%205.71111C19.0658%205.73793%2019.0843%205.76845%2019.1065%205.79804C19.1223%205.82024%2019.1435%205.83966%2019.1565%205.8637C19.1777%205.90069%2019.1898%205.93953%2019.2046%205.97837C19.212%205.99964%2019.2249%206.01906%2019.2305%206.04125C19.2475%206.10427%2019.2562%206.16925%2019.2563%206.23453V25.2467L26.6618%2020.9827V11.2634C26.6618%2011.1987%2026.6711%2011.133%2026.6877%2011.071C26.6942%2011.0488%2026.7062%2011.0294%2026.7136%2011.0082C26.7284%2010.9693%2026.7414%2010.9296%2026.7617%2010.8935C26.7756%2010.8694%2026.7959%2010.85%2026.8117%2010.8278C26.8339%2010.7982%2026.8524%2010.7677%2026.8782%2010.7418C26.8995%2010.7206%2026.9263%2010.7048%2026.9504%2010.6863C26.9781%2010.6641%2027.0022%2010.6401%2027.0318%2010.6225L35.9206%205.50582C36.0331%205.44097%2036.1606%205.40684%2036.2905%205.40684C36.4203%205.40684%2036.5479%205.44097%2036.6604%205.50582L45.5474%2010.6225C45.5788%2010.641%2045.6029%2010.6641%2045.6306%2010.6854C45.6537%2010.7039%2045.6805%2010.7206%2045.7018%2010.7409C45.7277%2010.7677%2045.7462%2010.7982%2045.7684%2010.8278C45.785%2010.85%2045.8054%2010.8694%2045.8183%2010.8935C45.8396%2010.9296%2045.8516%2010.9693%2045.8664%2011.0082C45.8747%2011.0294%2045.8868%2011.0488%2045.8923%2011.071ZM44.4367%2020.9827V12.5451L41.3267%2014.3355L37.0303%2016.8092V25.2467L44.4377%2020.9827H44.4367ZM35.5498%2036.2459V27.8028L31.3236%2030.2164L19.2554%2037.1041V45.6267L35.5498%2036.2459ZM1.48147%207.51533V36.2459L17.774%2045.6258V37.105L9.26243%2032.2879L9.25965%2032.286L9.25596%2032.2842C9.22729%2032.2675%209.20325%2032.2435%209.17643%2032.2232C9.15331%2032.2047%209.12649%2032.1899%209.10614%2032.1695L9.10429%2032.1667C9.08025%2032.1436%209.06361%2032.115%209.04326%2032.0891C9.02477%2032.0641%209.00257%2032.0428%208.98777%2032.0169L8.98685%2032.0142C8.9702%2031.9864%208.96003%2031.9531%208.94801%2031.9217C8.93599%2031.8939%208.92027%2031.868%208.91287%2031.8385C8.90362%2031.8033%208.90177%2031.7654%208.89807%2031.7293C8.89437%2031.7016%208.88698%2031.6738%208.88698%2031.6461V11.7794L4.59145%209.30474L1.48147%207.51533ZM9.62864%201.9723L2.22406%206.23453L9.62679%2010.4968L17.0304%206.2336L9.62679%201.9723H9.62864ZM13.4794%2028.5722L17.7749%2026.0994V7.51533L14.6649%209.30567L10.3684%2011.7794V30.3635L13.4794%2028.5722ZM36.2905%207.00208L28.8868%2011.2643L36.2905%2015.5266L43.6932%2011.2634L36.2905%207.00208ZM35.5498%2016.8092L31.2533%2014.3355L28.1433%2012.5451V20.9827L32.4388%2023.4555L35.5498%2025.2467V16.8092ZM18.5138%2035.8233L29.3733%2029.6236L34.8016%2026.5257L27.4035%2022.2662L18.8855%2027.1702L11.1221%2031.6396L18.5138%2035.8233Z'%20fill='%23FF2D20'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_93_621'%3e%3crect%20width='46'%20height='47.56'%20fill='white'%20transform='translate(0%200.219971)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",n2="data:image/svg+xml,%3csvg%20width='46'%20height='46'%20viewBox='0%200%2046%2046'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3.26953%2022.9995C3.26953%2030.8094%207.80807%2037.5587%2014.3893%2040.7571L4.97773%2014.9696C3.88298%2017.4235%203.26953%2020.139%203.26953%2022.9995L3.26953%2022.9995Z'%20fill='%2321759B'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M36.3191%2022.0039C36.3191%2019.5654%2035.4432%2017.8766%2034.692%2016.5622C33.6918%2014.937%2032.7544%2013.5606%2032.7544%2011.9353C32.7544%2010.1216%2034.13%208.43321%2036.0676%208.43321C36.155%208.43321%2036.238%208.4441%2036.3232%208.44898C32.813%205.23296%2028.1363%203.26941%2022.9997%203.26941C16.1068%203.26941%2010.0425%206.80605%206.51465%2012.1628C6.97755%2012.1767%207.4138%2012.1865%207.78434%2012.1865C9.84807%2012.1865%2013.0426%2011.9361%2013.0426%2011.9361C14.1062%2011.8734%2014.2316%2013.4356%2013.1691%2013.5613C13.1691%2013.5613%2012.1003%2013.6871%2010.9109%2013.7494L18.0958%2035.1213L22.4136%2022.1713L19.3396%2013.7487C18.2772%2013.6864%2017.2706%2013.5606%2017.2706%2013.5606C16.2074%2013.4983%2016.3321%2011.8726%2017.3953%2011.9353C17.3953%2011.9353%2020.6536%2012.1857%2022.5923%2012.1857C24.6557%2012.1857%2027.8506%2011.9353%2027.8506%2011.9353C28.9149%2011.8726%2029.0399%2013.4348%2027.9771%2013.5606C27.9771%2013.5606%2026.906%2013.6864%2025.7189%2013.7487L32.849%2034.9588L34.817%2028.3822C35.67%2025.6531%2036.3191%2023.693%2036.3191%2022.0039Z'%20fill='%2321759B'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M23.3455%2024.7254L17.4258%2041.9276C19.1933%2042.4472%2021.0625%2042.7314%2022.9994%2042.7314C25.297%2042.7314%2027.5004%2042.3342%2029.5513%2041.613C29.4984%2041.5285%2029.4504%2041.4388%2029.4109%2041.3412L23.3455%2024.7254Z'%20fill='%2321759B'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M40.312%2013.5331C40.3969%2014.1616%2040.4449%2014.8362%2040.4449%2015.562C40.4449%2017.5642%2040.071%2019.8149%2038.9447%2022.6292L32.918%2040.0545C38.7836%2036.6339%2042.729%2030.2788%2042.729%2022.9998C42.7294%2019.5694%2041.8531%2016.3436%2040.312%2013.5331L40.312%2013.5331Z'%20fill='%2321759B'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%2022.9994C0%2010.3175%2010.3179%200%2022.9994%200C35.6806%200%2045.9996%2010.3175%2046%2022.9994C46%2035.6829%2035.6806%2046%2022.9994%2046C10.3179%2046%200%2035.6829%200%2022.9994ZM1.05444%2022.9995C1.05444%2035.1007%2010.8993%2044.9458%2022.9993%2044.9458C35.0989%2044.9458%2044.943%2035.1007%2044.943%2022.9995C44.943%2010.8991%2035.0989%201.05464%2022.9993%201.05464C10.8989%201.05464%201.05444%2010.8991%201.05444%2022.9995Z'%20fill='%2321759B'/%3e%3c/svg%3e",c2="data:image/svg+xml,%3csvg%20width='36'%20height='50'%20viewBox='0%200%2036%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M35.7114%209.82617L32.4843%2045.9785L17.9781%2050L3.51189%2045.984L0.288086%209.82617H35.7114H35.7114Z'%20fill='%23E44D26'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.9995%2046.926L29.7212%2043.6764L32.4789%2012.7825H17.9995V46.926Z'%20fill='%23F16529'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.9998%2021.6519H11.7263L12.1317%2026.193H17.9998V30.6276H8.07598L6.98597%2018.407L6.87988%2017.2173H17.9998V21.6519ZM8.27417%2032.845H12.7259L13.0416%2036.3817L17.9804%2037.7153L17.9999%2037.7101V42.324L17.9795%2042.3296L8.89541%2039.808L8.27417%2032.845Z'%20fill='%23EBEBEB'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.83746%200H3.58398V6.74253H5.8376V4.48474H7.89918V6.74253H10.1528V0H7.89905V2.22654H5.83746V0ZM11.1324%202.23598H13.1161H13.1164H13.1165V6.74253H15.3701V2.23598H17.3551V0H11.1324V2.23598ZM18.3426%200H20.6925L22.1379%202.36915L23.582%200H25.9328V6.74253H23.6884V3.40056L22.1379%205.79789H22.0991L20.5476%203.40056V6.74253H18.3426V0ZM29.3084%200H27.0541H27.054V6.74253H32.4777V4.5139H29.3084V0Z'%20fill='black'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.9849%2021.6412V21.6411V17.2173H29.0936L28.9876%2018.407L28.7854%2020.6552L28.6966%2021.6519H17.9849V21.6412ZM23.4453%2030.6276H17.9845V26.193H28.2927L28.1845%2027.3838L27.1423%2039.0588L27.0756%2039.808L17.9844%2042.3276V37.714L22.9304%2036.379L23.4453%2030.6276Z'%20fill='white'/%3e%3c/svg%3e",d2="/assets/php-BxQsMJQ2.svg",p2={class:"max-w-5xl mx-auto flex flex-col sm:flex-row flex-wrap sm:gap-7 gap-4 px-5 sm:px-8"},u2={id:"cards",class:"grow relative space-y-11"},m2={__name:"SectionJourney",setup(i){const e=M({vue:{icon:s2,inView:!1},css:{icon:a2,inView:!1},js:{icon:i2,inView:!1},tailwind:{icon:o2,inView:!1},laravel:{icon:r2,inView:!1},wordpress:{icon:n2,inView:!1},html:{icon:c2,inView:!1},php:{icon:d2,inView:!1}}),s=b([]),l=new IntersectionObserver(a=>{a.forEach(o=>{const p=o.target.id;e[p]&&(e[p].inView=o.isIntersecting)})},{root:null,threshold:.5,rootMargin:"700px 0px -200px 0px"});return Z(()=>{s.value=s.value.map(a=>a.$el),s.value.forEach(a=>l.observe(a))}),j(()=>{s.value.forEach(a=>l.unobserve(a)),l.disconnect()}),(a,o)=>(c(),m(g,{class:"space-y-2.5 sm:space-y-4 relative"},{default:w(()=>[o[2]||(o[2]=t("div",{class:"sticky top-0 z-10 backdrop-blur-3xl sm:top-15 gap-2 flex flex-wrap justify-between py-2 items-center"},[t("h2",{class:"max-w-5xl mx-auto w-full px-5 sm:px-8"},"Journey")],-1)),t("div",p2,[o[1]||(o[1]=t("p",{class:"sm:max-w-70"},"I have skills with WordPress, Elementor, Breakdance Builder, TailwindCSS, Semantic HTML and CSS. Currently exploring Laravel.",-1)),t("div",u2,[o[0]||(o[0]=t("span",{id:"hline",class:"absolute bottom-0 w-1 bg-brand-y top-2 left-5.5 sm:left-12 z-0"},null,-1)),(c(!0),h(y,null,B(d(l2),(p,L)=>(c(),m(U,{ref_for:!0,ref_key:"listItem",ref:s,id:L,key:L,iconSrc:e[p.name].icon,iconAlt:p.iconAlt,date:p.date,title:p.title,summary:p.summary,isVisible:e[p.name].inView},null,8,["id","iconSrc","iconAlt","date","title","summary","isVisible"]))),128))])])]),_:1}))}},v="/assets/placeholder-C22aK_-Z.webp",h2=["href"],f2=["src","alt"],v2={class:"grow py-2 px-4 h-full flex flex-col justify-center"},w2={class:"font-bold"},x2={class:"font-light"},f={__name:"PostLink",props:{type:String,link:String,thumbnail:String,title:String,date:String,summary:String},setup(i){const e=i;return(s,l)=>(c(),h("a",{href:e.link,class:r({"group overflow-clip gap-1 sm:gap-3 items-center bg-surface/60 rounded-2xl shadow hover:shadow-lg hover:shadow-brand-y/30 transition-shadow duration-300 ":!0,"w-full flex flex-row h-30":e.type=="article","flex-col w-full sm:min-w-80 flex-1 h-fit":e.type=="project"})},[t("span",{class:r({"bg-brand-y grayscale grow inline-block group-hover:grayscale-0 transition-all duration-300":!0,"h-full w-40 max-w-40":e.type=="article","h-40 sm:h-70 w-full":e.type=="project"})},[t("img",{class:"object-center object-contain w-full h-full",src:e.thumbnail??d(v),alt:e.title},null,8,f2)],2),t("div",v2,[t("div",{class:r({"flex flex-row justify-between":!0,"bg-brand-x/30 w-full h-6 rounded-lg":!e.title})},[t("h3",w2,u(e.title),1),t("span",x2,u(e.date),1)],2),t("p",{class:r({"bg-brand-x/20 w-full h-12 rounded-lg mt-2":!e.summary})},u(e.summary),3)])],10,h2))}},g2={class:"sticky top-0 z-10 backdrop-blur-3xl sm:top-15 gap-2"},C2={class:"max-w-5xl px-5 sm:px-8 mx-auto flex flex-wrap justify-between py-2 items-center"},L2={class:"max-w-5xl px-5 sm:px-8 mx-auto flex flex-col sm:flex-row flex-wrap sm:gap-7 gap-4"},_2={class:"sm:basis-xl grow space-y-4"},b2={__name:"SectionArticles",setup(i){const e=C("icons");return(s,l)=>(c(),m(g,{class:"space-y-2.5 sm:space-y-4 relative"},{default:w(()=>[t("div",g2,[t("div",C2,[l[0]||(l[0]=t("h2",null,"Recent Articles",-1)),n(x,{secondary:"",href:"/articles",svgd:d(e).list,text:"Show All"},null,8,["svgd"])])]),t("div",L2,[l[1]||(l[1]=t("p",{class:"sm:basis-72 grow"},"I have skills with WordPress, Elementor, Breakdance Builder, TailwindCSS, Semantic HTML and CSS. Currently exploring Laravel.",-1)),t("div",_2,[n(f,{type:"article",title:"My First Post",link:"/",thumbnail:d(v),date:"22d",summary:"This is the post excerpt. This is the post excerpt."},null,8,["thumbnail"]),n(f,{type:"article",title:"My First Post",link:"/",thumbnail:d(v),date:"22d",summary:"This is the post excerpt. This is the post excerpt."},null,8,["thumbnail"]),n(f,{type:"article"})])])]),_:1}))}},y2={class:"sticky top-0 z-10 backdrop-blur-3xl sm:top-15 gap-2"},V2={class:"max-w-5xl px-5 sm:px-8 mx-auto flex flex-wrap justify-between py-2 items-center"},H2={class:"max-w-5xl px-5 sm:px-8 mx-auto flex flex-col sm:flex-row flex-wrap gap-4"},S2={__name:"SectionProjects",setup(i){const e=C("icons");return(s,l)=>(c(),m(g,{class:"space-y-2.5 sm:space-y-4 relative"},{default:w(()=>[t("div",y2,[t("div",V2,[l[0]||(l[0]=t("h2",null,"Recent Projects",-1)),n(x,{secondary:"",href:"/projects",svgd:d(e).projects,text:"Show All"},null,8,["svgd"])])]),t("div",H2,[n(f,{type:"project",title:"My First Post",link:"/",thumbnail:d(v),date:"22d",summary:"This is the post excerpt. This is the post excerpt."},null,8,["thumbnail"]),n(f,{type:"project",title:"My First Post",link:"/",thumbnail:d(v),date:"22d",summary:"This is the post excerpt. This is the post excerpt."},null,8,["thumbnail"])])]),_:1}))}},j2={__name:"IndexView",setup(i){return(e,s)=>(c(),h(y,null,[n(J),n(m2),n(b2),n(S2)],64))}};export{j2 as default};