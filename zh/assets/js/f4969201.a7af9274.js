"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[71994],{4064:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));n(61839);const r={title:"DORA - Median Time to Restore Service",description:"DORA - Median Time to Restore Service\n",sidebar_position:28},o=void 0,s={unversionedId:"Metrics/MTTR",id:"Metrics/MTTR",title:"DORA - Median Time to Restore Service",description:"DORA - Median Time to Restore Service\n",source:"@site/docs/Metrics/MTTR.md",sourceDirName:"Metrics",slug:"/Metrics/MTTR",permalink:"/zh/docs/Metrics/MTTR",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Metrics/MTTR.md",tags:[],version:"current",sidebarPosition:28,frontMatter:{title:"DORA - Median Time to Restore Service",description:"DORA - Median Time to Restore Service\n",sidebar_position:28},sidebar:"docsSidebar",previous:{title:"DORA - Failed Deployment Recovery Time",permalink:"/zh/docs/Metrics/FailedDeploymentRecoveryTime"},next:{title:"DORA - Change Failure Rate",permalink:"/zh/docs/Metrics/CFR"}},l={},d=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],m={toc:d};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,i.kt)("p",null,"The time to restore service after service incidents, rollbacks, or any type of production failure happened."),(0,i.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,i.kt)("p",null,"This metric is essential to measure the disaster control capability of your team and the robustness of the software."),(0,i.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,i.kt)("p",null,"DORA dashboard. See ",(0,i.kt)("a",{parentName:"p",href:"https://grafana-lake.demo.devlake.io/grafana/d/qNo8_0M4z/dora?orgId=1"},"live demo"),"."),(0,i.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,i.kt)("p",null,"MTTR = Total ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/Metrics/IncidentAge"},"incident age")," (in hours)/number of incidents."),(0,i.kt)("p",null,"If you have three incidents that happened in the given data range, one lasting 1 hour, one lasting 2 hours and one lasting 3 hours. Your MTTR will be: (1 + 2 + 3) / 3 = 2 hours."),(0,i.kt)("p",null,"Below are the 2023 DORA benchmarks for different development teams from Google's report. However, it's difficult to tell which group a team falls into when the team's median time to restore service is ",(0,i.kt)("inlineCode",{parentName:"p"},"between one week and six months"),". Therefore, DevLake provides its own benchmarks to address this problem:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Groups"),(0,i.kt)("th",{parentName:"tr",align:null},"Benchmarks"),(0,i.kt)("th",{parentName:"tr",align:null},"DevLake Benchmarks"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Elite performers"),(0,i.kt)("td",{parentName:"tr",align:null},"Less than one hour"),(0,i.kt)("td",{parentName:"tr",align:null},"Less than one hour")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"High performers"),(0,i.kt)("td",{parentName:"tr",align:null},"Less than one day"),(0,i.kt)("td",{parentName:"tr",align:null},"Less than one day")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Medium performers"),(0,i.kt)("td",{parentName:"tr",align:null},"Between one day and one week"),(0,i.kt)("td",{parentName:"tr",align:null},"Between one day and one week")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Low performers"),(0,i.kt)("td",{parentName:"tr",align:null},"More than six months"),(0,i.kt)("td",{parentName:"tr",align:null},"More than one week")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Click to expand or collapse 2021 DORA benchmarks"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Groups"),(0,i.kt)("th",{parentName:"tr",align:null},"Benchmarks"),(0,i.kt)("th",{parentName:"tr",align:null},"DevLake Benchmarks"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Elite performers"),(0,i.kt)("td",{parentName:"tr",align:null},"Less than one hour"),(0,i.kt)("td",{parentName:"tr",align:null},"Less than one hour")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"High performers"),(0,i.kt)("td",{parentName:"tr",align:null},"Less than one day"),(0,i.kt)("td",{parentName:"tr",align:null},"Less than one day")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Medium performers"),(0,i.kt)("td",{parentName:"tr",align:null},"Between one day and one week"),(0,i.kt)("td",{parentName:"tr",align:null},"Between one day and one week")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Low performers"),(0,i.kt)("td",{parentName:"tr",align:null},"More than six months"),(0,i.kt)("td",{parentName:"tr",align:null},"More than one week")))),(0,i.kt)("p",null,(0,i.kt)("i",null,"Source: 2021 Accelerate State of DevOps, Google"))),(0,i.kt)("br",null),(0,i.kt)("b",null,"Data Sources Required"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Incidents")," from Jira issues, GitHub issues, TAPD issues, PagerDuty Incidents, etc.")),(0,i.kt)("b",null,"Transformation Rules Required"),(0,i.kt)("p",null,"Define ",(0,i.kt)("inlineCode",{parentName:"p"},"incident")," in ",(0,i.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/Configuration/Tutorial#step-3---add-transformations-optional"},"data transformations")," while configuring the blueprint of a project to let DevLake know what CI/issue records can be regarded as deployments or incidents."),(0,i.kt)("b",null,"SQL Queries"),(0,i.kt)("p",null,"If you want to measure the monthly trend of the Median Time to Restore Service as the picture shown below, run the following SQL in Grafana."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(40518).Z,width:"1354",height:"602"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"-- Metric 3: median time to restore service - MTTR\n-- Metric 3: median time to restore service - MTTR\nwith _incidents as (\n-- get the number of incidents created each month\n    SELECT\n      distinct i.id,\n        date_format(i.created_date,'%y/%m') as month,\n        cast(lead_time_minutes as signed) as lead_time_minutes\n    FROM\n        issues i\n      join board_issues bi on i.id = bi.issue_id\n      join boards b on bi.board_id = b.id\n      join project_mapping pm on b.id = pm.row_id and pm.`table` = 'boards'\n    WHERE\n      pm.project_name in (${project:sqlstring}+'')\n        and i.type = 'INCIDENT'\n        and i.lead_time_minutes is not null\n),\n\n_find_median_mttr_each_month_ranks as(\n    SELECT *, percent_rank() over(PARTITION BY month order by lead_time_minutes) as ranks\n    FROM _incidents\n),\n\n_mttr as(\n    SELECT month, max(lead_time_minutes) as median_time_to_resolve\n    FROM _find_median_mttr_each_month_ranks\n    WHERE ranks <= 0.5\n    GROUP BY month\n)\n\nSELECT \n    cm.month,\n    case \n        when m.median_time_to_resolve is null then 0 \n        else m.median_time_to_resolve/60 end as median_time_to_resolve_in_hour\nFROM \n    calendar_months cm\n    LEFT JOIN _mttr m on cm.month = m.month\n  WHERE $__timeFilter(cm.month_timestamp)\n")),(0,i.kt)("p",null,"If you want to measure in which category your team falls into as in the picture shown below, run the following SQL in Grafana."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(24904).Z,width:"455",height:"182"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"--  ***** 2023 report ***** --\n--  Metric 4: Failed deployment recovery time\nwith _incidents as (\n-- get the incidents created within the selected time period in the top-right corner\n    SELECT\n      distinct i.id,\n        cast(lead_time_minutes as signed) as lead_time_minutes\n    FROM\n        issues i\n      join board_issues bi on i.id = bi.issue_id\n      join boards b on bi.board_id = b.id\n      join project_mapping pm on b.id = pm.row_id and pm.`table` = 'boards'\n    WHERE\n      pm.project_name in (${project})\n        and i.type = 'INCIDENT'\n        and $__timeFilter(i.created_date)\n),\n\n_median_mttr_ranks as(\n    SELECT *, percent_rank() over(order by lead_time_minutes) as ranks\n    FROM _incidents\n),\n\n_median_mttr as(\n    SELECT max(lead_time_minutes) as median_time_to_resolve\n    FROM _median_mttr_ranks\n    WHERE ranks <= 0.5\n),\n\n_metric_mttr_2021_report as(\n    SELECT \n    CASE\n        WHEN ('$dora_report') = '2021' THEN\n            CASE\n                WHEN median_time_to_resolve < 60 THEN CONCAT(round(median_time_to_resolve/60,1), \"(elite)\")\n                WHEN median_time_to_resolve < 24 * 60 THEN CONCAT(round(median_time_to_resolve/60,1), \"(high)\")\n                WHEN median_time_to_resolve < 7 * 24 * 60 THEN CONCAT(round(median_time_to_resolve/60,1), \"(medium)\")\n                WHEN median_time_to_resolve >= 7 * 24 * 60 THEN CONCAT(round(median_time_to_resolve/60,1), \"(low)\")\n                ELSE \"N/A. Please check if you have collected incidents.\"\n            END\n    END AS median_time_to_resolve\n    FROM \n        _median_mttr\n)\n\nSELECT \n  median_time_to_resolve AS median_time_to_resolve\nFROM \n  _metric_mttr_2021_report\nWHERE \n  ('$dora_report') = '2021'\n\n")),(0,i.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use automated tools to quickly report failure"),(0,i.kt)("li",{parentName:"ul"},"Prioritize recovery when a failure happens"),(0,i.kt)("li",{parentName:"ul"},"Establish a go-to action plan to respond to failures immediately"),(0,i.kt)("li",{parentName:"ul"},"Reduce the deployment time for failure-fixing")))}p.isMDXComponent=!0},40518:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mttr-monthly-71f037b867c1f94523aa18ca7cd2e497.jpeg"},24904:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mttr-text-bd3e5e9835de07a63e2ec1533a16be7f.png"}}]);