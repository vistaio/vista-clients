"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("@vista.io/vista-api-client"),s=require("@mui/styles"),r=require("@mui/material/Button"),a=require("@mui/material/FormControl"),l=require("@mui/material/InputLabel"),o=require("@mui/material/Checkbox"),n=require("@mui/material/Box"),i=require("@mui/material/List"),c=require("@mui/material/ListItem"),d=require("@mui/material/ListItemText"),u=require("@mui/material/MenuItem"),h=require("@mui/material/Select"),p=require("@mui/material/Chip"),m=require("@mui/material/ListItemButton"),f=require("react-data-table-component");function g(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var y=g(e),b=g(t),x=g(r),R=g(a),w=g(l),C=g(o),I=g(n),E=g(i),S=g(c),_=g(d),v=g(u),T=g(h),k=g(p),N=g(m),G=g(f);const L=y.default.createContext({secret:"",defaultClient:new b.default("","","")});class q extends y.default.Component{render(){const{secret:e,branch:t,hostname:s}=this.props,r=new b.default(e,t,s);return y.default.createElement(L.Provider,{value:{secret:this.props.secret,defaultClient:r}},this.props.children)}}class B extends y.default.Component{constructor(){super(...arguments),this.state={hasChecked:!1,granted:!1},this.componentDidMount=async()=>{if(!this.state.hasChecked){const e=this.context.defaultClient,t=(await e.users.check(this.props.userId,this.props.action,this.props.resourceId,this.props.resourceType,this.props.branch).catch((e=>{this.props.handleError?this.props.handleError(e):console.log(e)}))).length>0;t&&this.setState({hasChecked:!0,granted:t})}}}renderedComponent(){return this.state.hasChecked&&this.state.granted?this.props.children:this.props.denyComponent?this.props.denyComponent:null}render(){return y.default.createElement(y.default.Fragment,null,this.renderedComponent())}}B.contextType=L;function F(e){const{label:t,userRoles:s,allRoles:r,selectClassName:a,chipsClassName:l,selectStyles:o,chipsStyles:n,grantRole:i,revokeRole:c}=e;return y.default.createElement(R.default,{sx:{minWidth:"200px"}},y.default.createElement(w.default,{key:t||"",shrink:s.length>0},t||""),y.default.createElement(T.default,{multiple:!0,value:[...s],renderValue:e=>y.default.createElement(I.default,{sx:{display:"flex",flexWrap:"wrap",gap:.5}},e.sort().map((e=>y.default.createElement(k.default,{key:e,label:e,className:l,style:n||{}})))),onChange:e=>{const t=e.target.value;if(t.length<s.length){const e=new Set(t),r=s.find((t=>!e.has(t)));r&&c(r)}else{const e=new Set(s),r=t.find((t=>!e.has(t)));r&&i(r)}},label:t||"",className:a,style:o||{}},r.map((e=>e.id)).sort().map((e=>y.default.createElement(v.default,{key:e,value:e},y.default.createElement(C.default,{checked:s.includes(e)}),y.default.createElement(_.default,{primary:e}))))))}class P extends y.default.Component{constructor(e,t){super(e),this.onGrantChange=async(e,t,s)=>{const{branch:r,orgId:a,onGrant:l}=this.props;if(!l)return;const o=await s(e,t,a,r);return o&&await this.refresh(a,r),o},this.state={client:t.defaultClient,selectedUserId:"",selectedRoleIds:[],roles:[],usersetIdToGrants:{},userIds:[],orgId:e.orgId,branch:e.branch}}async componentDidMount(){this.props.disabled||await this.refresh(this.props.orgId,this.props.branch)}async componentDidUpdate(){console.log(this.props.branch),this.state.orgId===this.props.orgId&&""!==this.state.orgId&&""!==this.state.branch&&this.state.branch===this.props.branch||(await this.refresh(this.props.orgId,this.props.branch),this.setState({orgId:this.props.orgId,branch:this.props.branch}))}async refresh(e,t){const s=(await this.state.client.withBranch(t).users.list(e)).map((e=>e.id)),r=await this.state.client.withBranch(t).roles.list(e),a=await this.state.client.withBranch(t).grants.listUnflattened(null,null,null,null,null,null,e),l={};a.forEach((e=>{l[e.userset_id]||(l[e.userset_id]=[]),"ROLE"===e.relation_type&&l[e.userset_id].push(e)})),this.setState({userIds:s,roles:r,usersetIdToGrants:l})}render(){const{classes:e,styles:t,userIdMap:s,title:r,onGrant:a,onRevoke:l}=this.props,{selectedUserId:o,selectedRoleIds:n,roles:i,usersetIdToGrants:c,userIds:d}=this.state;return y.default.createElement("div",{className:e.container,style:t.container},y.default.createElement("h1",{className:e.title,style:t.title},r),y.default.createElement("div",{className:e.newGrantRow,style:t.newGrantRow},y.default.createElement("div",{className:e.userSelectContainer,style:t.userSelectContainer},y.default.createElement(R.default,{sx:{width:"100%"}},y.default.createElement(w.default,{margin:"dense"},"Select User"),y.default.createElement(T.default,{value:o,onChange:e=>{this.setState({selectedUserId:e.target.value,selectedRoleIds:[]})},className:e.userSelect,style:t.userSelect,label:"Select User"},s?Object.entries(s).map((([e,t])=>y.default.createElement(v.default,{key:e,value:e}," ",t))):d.map((e=>y.default.createElement(v.default,{key:e,value:e},e)))))),y.default.createElement("div",{className:e.roleSelect,style:t.roleSelect},y.default.createElement(F,{label:"Select Role",userRoles:n,grantRole:e=>{n.push(e),this.setState({selectedRoleIds:n})},revokeRole:e=>{this.setState({selectedRoleIds:n.filter((t=>t!==e))})},selectClassName:e.grantRoleSelect,chipsClassName:e.grantRoleSelectChip,selectStyles:t.grantRoleSelect,chipsStyles:t.grantRoleSelectChip,allRoles:o.length&&c[o]?i.filter((e=>!c[o].map((e=>e.relation)).includes(e.id))):i})),y.default.createElement(x.default,{className:e.grantButton,style:t.grantButton,variant:"contained",disabled:!(o.length&&n.length),onClick:async()=>{for(const e of n)await this.onGrantChange(o,e,a);this.setState({selectedUserId:"",selectedRoleIds:[]})}},"Grant")),y.default.createElement("div",{className:e.grantList,style:t.grantList},y.default.createElement(E.default,null,Object.keys(c).sort().map((s=>{const r=c[s],o=r.map((e=>e.relation));return y.default.createElement(S.default,{key:s,className:e.grantRow,style:t.grantRow,secondaryAction:y.default.createElement(F,{userRoles:o,grantRole:e=>{r.push({userId:s,relation:e,userset_id:s,relation_type:"ROLE"}),c[s]=r,this.onGrantChange(s,e,a),this.setState({usersetIdToGrants:c})},revokeRole:e=>{const t=r.filter((t=>t.relation!==e));c[s]=t,this.onGrantChange(s,e,l),this.setState({usersetIdToGrants:c})},selectClassName:e.grantRoleSelect,chipsClassName:e.grantRoleSelectChip,selectStyles:t.grantRoleSelect,chipsStyles:t.grantRoleSelectChip,allRoles:i})},y.default.createElement(_.default,{primary:s}))})))))}}P.contextType=L,P.defaultProps={styles:{},title:"Add Teammates"};const U=s.withStyles({container:{height:"500px",width:"600px",display:"flex",flexDirection:"column",border:"solid",borderColor:"lightgray",borderWidth:"1px",padding:"50px",marginBottom:"50px"},title:{marginTop:"0px"},newGrantRow:{display:"flex",marginBottom:"20px"},userSelectContainer:{flexGrow:"1",height:"64px !important",marginRight:"10px"},userSelect:{height:"64px !important"},roleSelect:{marginRight:"10px"},grantButton:{},grantRow:{height:"75px"},grantList:{flexGrow:"1",width:"100%",padding:"0",border:"solid",borderColor:"lightgray",borderWidth:"1px",overflow:"scroll",margin:"0"},grantRoleSelect:{height:"64px"},grantRoleSelectChip:{backgroundColor:"black !important",color:"white !important"}})(P);function V(e){const{row:t,classes:s,text:r}=e,a=e.styles||s;return y.default.createElement("p",{className:t.inheritedFrom?s.permissionsTableRowInherited:s.permissionsTableRow,style:t.inheritedFrom?a.permissionsTableRowInherited:a.permissionsTableRow}," ",r," ")}function j(e){const{classes:t,styles:s,title:r}=e;return y.default.createElement("div",{className:t.permissionsTable},y.default.createElement(G.default,{title:r,columns:[{name:"Resource Type",selector:()=>"resourceType",sortable:!0,cell:e=>y.default.createElement(V,{text:e.resourceType,classes:t,styles:s,row:e})},{name:"Attribute",selector:()=>"attribute",sortable:!0,right:!0,cell:e=>y.default.createElement(V,{text:e.attribute,classes:t,styles:s,row:e})},{name:"Actions",selector:()=>"actions",sortable:!0,right:!0,cell:e=>y.default.createElement(V,{text:e.actions.join(", "),classes:t,styles:s,row:e})},{name:"Inherited From",selector:()=>"inheritedFrom",sortable:!0,right:!0,cell:e=>y.default.createElement(V,{text:e.inheritedFrom,classes:t,styles:s,row:e})}],data:(()=>{const{rolesById:t,role:s}=e;if(!s)return[];const r={},a=[...s.parent_roles],l=new Set,o=[];for(;a.length;){const e=a.shift();if(!e||l.has(e))continue;l.add(e);const s=t[e];for(const e in s.resource_types_to_attributes_to_actions)for(const t in s.resource_types_to_attributes_to_actions[e]){const a=s.resource_types_to_attributes_to_actions[e][t],l=`${e}_${t}`;r[l]||(o.push({actions:a,attribute:t,id:l,resourceType:e,inheritedFrom:s.id}),r[l]=!0)}a.push(...s.parent_roles)}for(const e in s.resource_types_to_attributes_to_actions)for(const t in s.resource_types_to_attributes_to_actions[e]){const a=`${e}_${t}`,l=s.resource_types_to_attributes_to_actions[e][t];r[a]||(o.push({id:a,actions:l,attribute:t,resourceType:e,inheritedFrom:""}),r[a]=!0)}return o})()}))}class O extends y.default.Component{constructor(e,t){super(e),this.state={client:t.defaultClient,rolesById:{},selectedRoleId:""}}async componentDidMount(){const e=await this.state.client.roles.list(this.props.orgId),t={};e.forEach((e=>{t[e.id]=e}));const s=e.length?e[0].id:"";this.setState({rolesById:t,selectedRoleId:s})}render(){const{classes:e}=this.props,t=this.props.styles||e,{rolesById:s,selectedRoleId:r}=this.state;return y.default.createElement("div",{className:e.container,style:t.container},y.default.createElement(E.default,{className:e.rolesList,style:t.rolesList,disablePadding:!0},Object.values(s).map((s=>y.default.createElement(S.default,{key:s.id,disablePadding:!0},y.default.createElement(N.default,{className:e.rolesListRow,style:t.rolesListRow,selected:r===s.id,disableRipple:!0,onClick:()=>this.setState({selectedRoleId:s.id})},y.default.createElement(_.default,{primary:s.id})))))),y.default.createElement(j,{title:`${r} Permissions`,rolesById:s,role:s[r],classes:e,styles:t}))}}O.contextType=L,O.defaultProps={styles:{}};const M=s.withStyles({container:{height:"500px",width:"1000px",display:"flex",border:"solid",borderColor:"lightgray",borderWidth:"1px"},title:{marginTop:"0px"},rolesList:{height:"100%",width:"200px",overflow:"scroll",borderRight:"1px solid lightgray"},rolesListRow:{height:"60px"},rolesListRowText:{fontSize:"100px"},permissionsTable:{height:"100%",flexGrow:"1"},permissionsTableRowInherited:{color:"grey"},permissionsTableRow:{}})(O);Object.defineProperty(exports,"VistaClient",{enumerable:!0,get:function(){return b.default}}),exports.VistaCheck=B,exports.VistaContext=L,exports.VistaGrant=U,exports.VistaProvider=q,exports.VistaRoles=M,exports.useVistaClient=()=>e.useContext(L).defaultClient;
//# sourceMappingURL=index.js.map
