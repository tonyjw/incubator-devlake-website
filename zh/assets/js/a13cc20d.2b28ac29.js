"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[1914],{20410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var i=n(87462),a=(n(67294),n(3905));n(61839);const o={title:"Configuring BitBucket(Beta)",sidebar_position:2,description:"Config UI instruction for BitBucket(Cloud)"},r=void 0,s={unversionedId:"UserManuals/ConfigUI/BitBucket",id:"UserManuals/ConfigUI/BitBucket",title:"Configuring BitBucket(Beta)",description:"Config UI instruction for BitBucket(Cloud)",source:"@site/docs/UserManuals/ConfigUI/BitBucket.md",sourceDirName:"UserManuals/ConfigUI",slug:"/UserManuals/ConfigUI/BitBucket",permalink:"/zh/docs/next/UserManuals/ConfigUI/BitBucket",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/UserManuals/ConfigUI/BitBucket.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Configuring BitBucket(Beta)",sidebar_position:2,description:"Config UI instruction for BitBucket(Cloud)"},sidebar:"docsSidebar",previous:{title:"Tutorial",permalink:"/zh/docs/next/UserManuals/ConfigUI/Tutorial"},next:{title:"Configuring GitHub",permalink:"/zh/docs/next/UserManuals/ConfigUI/GitHub"}},l={},u=[{value:"Step 1 - Add Data Connections",id:"step-1---add-data-connections",level:3},{value:"Connection Name",id:"connection-name",level:4},{value:"Endpoint URL",id:"endpoint-url",level:4},{value:"Authentication",id:"authentication",level:4},{value:"Proxy URL (Optional)",id:"proxy-url-optional",level:4},{value:"Fixed Rate Limit (Optional)",id:"fixed-rate-limit-optional",level:4},{value:"Test and Save Connection",id:"test-and-save-connection",level:4},{value:"Step 2 - Configure Blueprint",id:"step-2---configure-blueprint",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3}],d={toc:u};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Visit config-ui: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:4000")," and go to ",(0,a.kt)("inlineCode",{parentName:"p"},"Connections")," page."),(0,a.kt)("h3",{id:"step-1---add-data-connections"},"Step 1 - Add Data Connections"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"bitbucket-add-data-connections",src:n(77861).Z,width:"927",height:"438"})),(0,a.kt)("h4",{id:"connection-name"},"Connection Name"),(0,a.kt)("p",null,"Name your connection."),(0,a.kt)("h4",{id:"endpoint-url"},"Endpoint URL"),(0,a.kt)("p",null,"This should be a valid REST API endpoint for BitBucket: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.bitbucket.org/2.0/"),". The endpoint URL should end with ",(0,a.kt)("inlineCode",{parentName:"p"},"/"),"."),(0,a.kt)("p",null,"DevLake will support BitBucket Server in the future."),(0,a.kt)("h4",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"BitBucket ",(0,a.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"app password")," are required to add a connection. Learn about ",(0,a.kt)("a",{parentName:"p",href:"https://support.atlassian.com/bitbucket-cloud/docs/create-an-app-password/"},"how to create a BitBucket app password"),"."),(0,a.kt)("p",null,"The following permissions are required to collect data from BitBucket repositories:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Account:Read"),(0,a.kt)("li",{parentName:"ul"},"Workspace membership:Read"),(0,a.kt)("li",{parentName:"ul"},"Projects:Read"),(0,a.kt)("li",{parentName:"ul"},"Repositories:Read"),(0,a.kt)("li",{parentName:"ul"},"Pull requests:Read"),(0,a.kt)("li",{parentName:"ul"},"Issues:Read"),(0,a.kt)("li",{parentName:"ul"},"Pipelines:Read"),(0,a.kt)("li",{parentName:"ul"},"Runners:Read")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"bitbucket-app-password-permissions",src:n(44132).Z,width:"1212",height:"830"})),(0,a.kt)("h4",{id:"proxy-url-optional"},"Proxy URL (Optional)"),(0,a.kt)("p",null,"If you are behind a corporate firewall or VPN you may need to utilize a proxy server. Enter a valid proxy server address on your network, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"http://your-proxy-server.com:1080")),(0,a.kt)("h4",{id:"fixed-rate-limit-optional"},"Fixed Rate Limit (Optional)"),(0,a.kt)("p",null,"DevLake uses a dynamic rate limit to collect BitBucket data. You can adjust the rate limit if you want to increase or lower the speed."),(0,a.kt)("p",null,"The maximum rate limit for different entities in BitBucket(Cloud) is ",(0,a.kt)("a",{parentName:"p",href:"https://support.atlassian.com/bitbucket-cloud/docs/api-request-limits/"},"60,000 or 1,000 requests/hour"),". Please do not use a rate that exceeds this number."),(0,a.kt)("h4",{id:"test-and-save-connection"},"Test and Save Connection"),(0,a.kt)("p",null,"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Test Connection"),", if the connection is successful, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Save Connection")," to add the connection."),(0,a.kt)("h3",{id:"step-2---configure-blueprint"},"Step 2 - Configure Blueprint"),(0,a.kt)("p",null,"Similar to other beta plugins, BitBucket does not support ",(0,a.kt)("inlineCode",{parentName:"p"},"project"),", which means, you can only collect BitBucket data via blueprint's advanced mode. "),(0,a.kt)("p",null,"Please go to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Blueprints")," page and switch to advanced mode. See how to use advanced mode and JSON ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/next/UserManuals/ConfigUI/AdvancedMode"},"examples"),"."),(0,a.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"If you run into any problem, please check the ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/next/Troubleshooting/Configuration"},"Troubleshooting")," or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"create an issue")))}p.isMDXComponent=!0},77861:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/bitbucket-add-data-connections-78478599286fe690d7d9ed258662b5c9.png"},44132:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/bitbucket-app-password-permissions-2b87fad376a9ab4a5e4f52b4352d38f1.jpeg"}}]);