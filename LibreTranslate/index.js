(function(f,v,u,t,_,B,l,g,G,C,$,F,O,E){"use strict";const k="https://tr.f4iey.fr/translate";var M={translate:async function(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"auto",a=arguments.length>2?arguments[2]:void 0,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"text",n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:3,d=arguments.length>5?arguments[5]:void 0;try{if(original)return{source_lang,text};const h=await(await fetch(k,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({q:e,source:r,target:a,format:i,alternatives:n,api_key:d})})).json();return{source_lang,text:h.translatedText}}catch(h){throw Error(`Failed to fetch from LibreTranslate instance: ${h}`)}}};const b=u.findByProps("openLazy","hideActionSheet"),P=u.findByProps("ActionSheetRow")?.ActionSheetRow??g.Forms.FormRow,H=u.findByStoreName("MessageStore"),j=u.findByStoreName("ChannelStore"),V=t.stylesheet.createThemedStyleSheet({iconComponent:{width:24,height:24,tintColor:B.semanticColors.INTERACTIVE_NORMAL}});let T=[];function z(){return _.before("openLazy",b,function(e){let[r,a,i]=e;const n=i?.message;a!=="MessageLongPressActionSheet"||!n||r.then(function(d){const h=_.after("default",d,function(ce,ne){t.React.useEffect(function(){return function(){h()}},[]);const A=G.findInReactTree(ne,function(s){return s?.[0]?.type?.name==="ButtonRow"});if(!A)return;const ae=Math.max(A.findIndex(function(s){return s.props.message===t.i18n.Messages.MARK_UNREAD}),0),c=H.getMessage(n.channel_id,n.id);if(!c?.content&&!n.content)return;const S=c?.id??n.id,re=c?.content??n.content,I=T.find(function(s){return Object.keys(s)[0]===S},"cache object"),L=I?"Revert":"Translate",U=L==="Translate"?l.getAssetIDByName("ic_locale_24px"):l.getAssetIDByName("ic_highlight"),ie=async function(){try{const s=o.target_lang,y=L==="Translate",se=await M.translate(c.content,void 0,s,!y);t.FluxDispatcher.dispatch({type:"MESSAGE_UPDATE",message:{...c,content:`${y?se.text:I[S]} ${y?`\`[${s?.toLowerCase()}]\``:""}`,guild_id:j.getChannel(c.channel_id).guild_id},log_edit:!1}),y?T.unshift({[S]:re}):T=T.filter(function(oe){return oe!==I},"cached data override")}catch(s){E.showToast("Failed to translate message. Please check Debug Logs for more info.",l.getAssetIDByName("Small")),C.logger.error(s)}finally{return b.hideActionSheet()}};A.splice(ae,0,t.React.createElement(P,{label:`${L} Message`,icon:t.React.createElement(P.Icon,{source:U,IconComponent:function(){return t.React.createElement(t.ReactNative.Image,{resizeMode:"cover",style:V.iconComponent,source:U})}}),onPress:ie}))})})})}var m;(function(e){e[e.BUILT_IN=0]="BUILT_IN",e[e.BUILT_IN_TEXT=1]="BUILT_IN_TEXT",e[e.BUILT_IN_INTEGRATION=2]="BUILT_IN_INTEGRATION",e[e.BOT=3]="BOT",e[e.PLACEHOLDER=4]="PLACEHOLDER"})(m||(m={}));var p;(function(e){e[e.SUB_COMMAND=1]="SUB_COMMAND",e[e.SUB_COMMAND_GROUP=2]="SUB_COMMAND_GROUP",e[e.STRING=3]="STRING",e[e.INTEGER=4]="INTEGER",e[e.BOOLEAN=5]="BOOLEAN",e[e.USER=6]="USER",e[e.CHANNEL=7]="CHANNEL",e[e.ROLE=8]="ROLE",e[e.MENTIONABLE=9]="MENTIONABLE",e[e.NUMBER=10]="NUMBER",e[e.ATTACHMENT=11]="ATTACHMENT"})(p||(p={}));var N;(function(e){e[e.CHAT=1]="CHAT",e[e.USER=2]="USER",e[e.MESSAGE=3]="MESSAGE"})(N||(N={}));var w={arabic:"AR",bulgarian:"BG",czech:"CS",danish:"DA",german:"DE",greek:"EL",english:"EN",spanish:"ES",estonian:"ET",finnish:"FI",french:"FR",hungarian:"HU",indonesian:"ID",italian:"IT",japanese:"JA",korean:"KO",lithuanian:"LT",latvian:"LV",norwegian:"NO",dutch:"NL",polish:"PL",portuguese:"PT",romanian:"RO",russian:"RU",slovak:"SK",slovenian:"SL",swedish:"SV",turkish:"TR",ukrainian:"UK","chinese-simplified":"ZH"};const K=u.findByProps("sendBotMessage"),q=Object.entries(w).map(function(e){let[r,a]=e;return{name:r,displayName:r,value:a}});function X(){return $.registerCommand({name:"translate",displayName:"translate",description:"Send a message using Dislate in any language chosen, using the LibreTranslate API.",displayDescription:"Send a message using Dislate in any language chosen, using the LibreTranslate API.",applicationId:"-1",type:N.CHAT,inputType:m.BUILT_IN_TEXT,options:[{name:"text",displayName:"text",description:"The text/message to translate. Please note some formatting of mentions and emojis may break due to the API.",displayDescription:"The text/message to translate. Please note some formatting of mentions and emojis may break due to the API.",type:p.STRING,required:!0},{name:"language",displayName:"language",description:"The language that LT will translate the text into. This can be any language from the list.",displayDescription:"The language that LT will translate the text into. This can be any language from the list.",type:p.STRING,choices:[...q],required:!0}],async execute(e,r){const[a,i]=e;try{const n=await M.translate(a.value,null,i.value);return await new Promise(function(d){return F.showConfirmationAlert({title:"Are you sure you want to send it?",content:React.createElement(g.Codeblock,null,n.text),confirmText:"Yep, send it!",onConfirm:function(){return d({content:n.text})},cancelText:"Nope, don't send it"})})}catch(n){return C.logger.error(n),K.sendBotMessage(r.channel.id,"Failed to translate message. Please check Debug Logs for more info.",l.getAssetIDByName("Small"))}}})}const{FormRow:D}=g.Forms,{ScrollView:Y}=t.ReactNative;function J(){O.useProxy(o);const[e,r]=t.React.useState("");return t.React.createElement(Y,{style:{flex:1}},t.React.createElement(g.Search,{style:{padding:15},placeholder:"Search Language",onChangeText:function(a){r(a)}}),Object.entries(w).filter(function(a){let[i,n]=a;return i.includes(e)}).map(function(a){let[i,n]=a;return t.React.createElement(D,{label:i,trailing:function(){return t.React.createElement(D.Arrow,null)},onPress:function(){o.target_lang!=n&&(o.target_lang=n,E.showToast(`Saved ToLang to ${i}`,l.getAssetIDByName("check")))}})}))}const{ScrollView:Z,Text:Q}=t.ReactNative,{FormRow:R}=g.Forms,W=t.stylesheet.createThemedStyleSheet({subheaderText:{color:B.semanticColors.HEADER_SECONDARY,textAlign:"center",margin:10,marginBottom:50,letterSpacing:.25,fontFamily:t.constants.Fonts.PRIMARY_BOLD,fontSize:14}});function ee(){const e=t.NavigationNative.useNavigation();return O.useProxy(o),t.React.createElement(Z,null,t.React.createElement(R,{label:"Translate to",subLabel:o.target_lang?.toLowerCase(),leading:t.React.createElement(R.Icon,{source:l.getAssetIDByName("ic_activity_24px")}),trailing:function(){return t.React.createElement(R.Arrow,null)},onPress:function(){return e.push("VendettaCustomPage",{title:"Translate to",render:J})}}),t.React.createElement(Q,{style:W.subheaderText,onPress:function(){return t.url.openURL("https://github.com/f4iey/bnplugins")}},`Build: (${v.manifest.hash.substring(0,7)})`))}const o=v.storage;o.target_lang??="EN";let x=[];var te={onLoad:function(){return x=[z(),X()]},onUnload:function(){for(const e of x)e()},settings:ee};return f.default=te,f.settings=o,Object.defineProperty(f,"__esModule",{value:!0}),f})({},vendetta.plugin,vendetta.metro,vendetta.metro.common,vendetta.patcher,vendetta.ui,vendetta.ui.assets,vendetta.ui.components,vendetta.utils,vendetta,vendetta.commands,vendetta.ui.alerts,vendetta.storage,vendetta.ui.toasts);
