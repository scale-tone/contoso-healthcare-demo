(this["webpackJsonpappointments-sample-ui"]=this["webpackJsonpappointments-sample-ui"]||[]).push([[0],{82:function(t,e,n){},91:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),o=n(11),s=n.n(o),r=(n(82),n(16)),c=n(17),l=n(47),y=n(46),u=n(6),h=n(65),d=n(119),g=n(122),f=n(129),v=n(131),S=n(124),p=n(123),m=n(126),E=n(92),b=n(127),C=n(128),j=n(125),O=n(66),I=n(15),k=n(48),w=function(){function t(){Object(r.a)(this,t),this.entityName="",this.entityKey="",this.version=0,this.stateDiff=[],this.isEntityDestructed=!1}return Object(c.a)(t,null,[{key:"GetEntityId",value:function(e){return t.FormatEntityId(e.entityName,e.entityKey)}},{key:"FormatEntityId",value:function(t,e){return"@".concat(t,"@").concat(e)}}]),t}(),N=function(){function t(){Object(r.a)(this,t),this.version=0,this.state={}}return Object(c.a)(t,null,[{key:"GetEntityNameAndKey",value:function(t){var e=/@([^@]+)@(.+)/.exec(t);return{entityNameLowerCase:e?e[1]:"",entityKey:e?e[2]:""}}}]),t}(),R=n(49),K=n(24),x="/a/p/i",A=function(t){Object(l.a)(n,t);var e=Object(y.a)(n);function n(t){var i;return Object(r.a)(this,n),(i=e.call(this,I.d.instance))._configFabric=t,i}return Object(c.a)(n,[{key:"send",value:function(t){var e=this;if(t.url.includes(x)){var i=this._configFabric();if(i.accessTokenFactory)return i.accessTokenFactory().then((function(i){return t.headers={},t.headers.Authorization="Bearer "+i,Object(R.a)(Object(K.a)(n.prototype),"send",e).call(e,t)}));if(i.fakeUserNamePromise)return i.fakeUserNamePromise.then((function(i){return i&&(t.headers={},t.headers["x-ms-client-principal-name"]=i),Object(R.a)(Object(K.a)(n.prototype),"send",e).call(e,t)}))}return Object(R.a)(Object(K.a)(n.prototype),"send",this).call(this,t)}}]),n}(I.a),D=function(){function t(e){Object(r.a)(this,t),this._maxKnownEntityIdsToPersist=e,this.States={},this.LocalStorageKnownIdsKey="DurableEntitySetKnownEntityIds"}return Object(c.a)(t,[{key:"getState",value:function(t){return this.States[t]}},{key:"getStatesCopy",value:function(){return Object.assign({},this.States)}},{key:"addOrUpdateState",value:function(t,e){if(this.States[t]=e,localStorage){var n=Object.keys(this.States).slice(0,this._maxKnownEntityIdsToPersist());localStorage.setItem(this.LocalStorageKnownIdsKey,JSON.stringify(n))}}},{key:"removeState",value:function(t){if(delete this.States[t],localStorage){var e=Object.keys(this.States).slice(0,this._maxKnownEntityIdsToPersist());localStorage.setItem(this.LocalStorageKnownIdsKey,JSON.stringify(e))}}},{key:"getStoredEntityIds",value:function(t){if(!localStorage)return[];var e=localStorage.getItem(this.LocalStorageKnownIdsKey);return e?JSON.parse(e).filter((function(e){return N.GetEntityNameAndKey(e).entityNameLowerCase===t})):[]}},{key:"removeStoredEntityIds",value:function(t){localStorage&&localStorage.removeItem(this.LocalStorageKnownIdsKey)}}]),t}(),L=function(){function t(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];Object(r.a)(this,t),this.items=[],this._entityNameLowerCase=void 0,this._entityNameLowerCase=e.toLowerCase(),Object(u.m)(this,{items:u.n}),n&&this.attachAllEntities()}return Object(c.a)(t,[{key:"attachAllEntities",value:function(){var e=this;return t.initSignalR(),t.EntitySets[this._entityNameLowerCase]=this.items,t.fetchAndApplyKnownEntityStates(this._entityNameLowerCase).then((function(){return t.fetchAndApplyAllEntityStates(e._entityNameLowerCase)}))}},{key:"attachEntity",value:function(e){var n=w.FormatEntityId(this._entityNameLowerCase,e);t.EntityStates.getState(n)||(t.EntitySets[n]=this.items,t.attachEntity(this._entityNameLowerCase,e,void 0))}},{key:"createEntity",value:function(e){t.createEntity(this._entityNameLowerCase,e,void 0)}},{key:"signalEntity",value:function(e,n,i){return t.signalEntity(this._entityNameLowerCase,e,n,i)}},{key:"callEntity",value:function(e,n,i){return t.callEntity(this._entityNameLowerCase,e,n,i)}},{key:"updateEntityMetadata",value:function(e,n){return t.updateEntityMetadata(this._entityNameLowerCase,e,n)}}],[{key:"attachEntity",value:function(e,n,i){t.initSignalR();var a=e.toLowerCase(),o=this.EntityStates.getState(w.FormatEntityId(a,n));return o?o.state:(i&&Object(u.l)(i),this.fetchAndApplyEntityState(a,n,0,0,i),i)}},{key:"createEntity",value:function(t,e,n){return this.updateEntityMetadata(t,e,{}),this.attachEntity(t,e,n)}},{key:"signalEntity",value:function(t,e,n,i){var a=t.toLowerCase(),o="".concat(x,"/entities/").concat(encodeURI(a),"/").concat(encodeURI(e),"/").concat(encodeURI(n));return this.HttpClient.post(o,{content:JSON.stringify(i)}).then()}},{key:"callEntity",value:function(t,e,n,i){var a=this,o=t.toLowerCase(),s="".concat(x,"/entities/").concat(encodeURI(o),"/").concat(encodeURI(e),"/").concat(encodeURI(n));return new Promise((function(t,e){a.HttpClient.post(s,{content:JSON.stringify(i)}).then((function(n){var i=JSON.parse(n.content).correlationId;a.SignalResultPromises[i]={resolve:t,reject:e}}),e)}))}},{key:"updateEntityMetadata",value:function(t,e,n){return this.signalEntity(t,e,"$update-entity-internal-metadata",n)}},{key:"setup",value:function(t){this.Config=t,this.Config.logger||(this.Config.logger=I.d.instance)}},{key:"entityAdded",value:function(t,e,n){var i=w.FormatEntityId(t,e),a=this.EntitySets[i];a?delete this.EntitySets[i]:a=this.EntitySets[t],a&&(n.entityKey=e,a.push(n))}},{key:"entityDeleted",value:function(t,e){var n=this.EntitySets[t];if(n)for(var i=0;i<n.length;i++)if(n[i].entityKey===e){n.splice(i,1);break}}},{key:"fetchAndApplyEntityState",value:function(t,e,n,i){var a=this,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s="".concat(x,"/entities/").concat(encodeURI(t),"/").concat(encodeURI(e));this.HttpClient.get(s).then((function(i){var s=JSON.parse(i.content),r=w.FormatEntityId(t,e);if(n&&s.version<n)throw new Error("Expected ".concat(r," of version ").concat(n,", but got version ").concat(s.version));o?a.applyStateChangesFrom(o,s.state):(o=s.state,Object(u.l)(o)),a.EntityStates.getState(r)||a.entityAdded(t,e,o),a.EntityStates.addOrUpdateState(r,{state:o,version:s.version})})).catch((function(s){i<a.MaxRetryCount?(i++,setTimeout((function(){a.fetchAndApplyEntityState(t,e,n,i,o)}),i*a.RetryBaseIntervalMs)):a.Config.logger.log(I.c.Error,"DurableEntitySet: failed to fetch entity state: ".concat(s))}))}},{key:"fetchAndApplyAllEntityStates",value:function(t){var e=this,n=this.EntityStates.getStatesCopy(),i="".concat(x,"/entities/").concat(encodeURI(t));return this.HttpClient.get(i).then((function(i){var a,o=Object(O.a)(JSON.parse(i.content));try{for(o.s();!(a=o.n()).done;){var s=a.value,r=s.entityKey,c=w.FormatEntityId(t,r),l=s,y=n[c];delete n[c],y?y.version<l.version?(e.Config.logger.log(I.c.Information,"DurableEntitySet: ".concat(c,", local version ").concat(y.version,", remote version ").concat(l.version,". State was updated.")),e.applyStateChangesFrom(y.state,l.state),y.version=l.version):e.Config.logger.log(I.c.Information,"DurableEntitySet: ".concat(c," is already known and is up to date. Skipping.")):(Object(u.l)(l.state),e.EntityStates.addOrUpdateState(c,l),e.entityAdded(t,r,l.state))}}catch(g){o.e(g)}finally{o.f()}for(var h in n){e.EntityStates.removeState(h);var d=N.GetEntityNameAndKey(h);e.entityDeleted(d.entityNameLowerCase,d.entityKey)}})).catch((function(t){e.Config.logger.log(I.c.Error,"DurableEntitySet: failed to fetch entity states: ".concat(t))}))}},{key:"fetchAndApplyKnownEntityStates",value:function(t){var e=this,n=this.EntityStates.getStoredEntityIds(t),i=this.EntityStates.getStatesCopy(),a="".concat(x,"/entities");return this.HttpClient.post(a,{content:JSON.stringify(n)}).then((function(t){for(var a=JSON.parse(t.content),o=0;o<n.length;o++){var s=n[o],r=N.GetEntityNameAndKey(s),c=a[o],l=i[s];l?l.version<c.version?(e.Config.logger.log(I.c.Information,"DurableEntitySet: ".concat(s,", local version ").concat(l.version,", remote version ").concat(c.version,". State was updated.")),e.applyStateChangesFrom(l.state,c.state),l.version=c.version):e.Config.logger.log(I.c.Information,"DurableEntitySet: ".concat(s," is already known and is up to date. Skipping.")):(Object(u.l)(c.state),e.EntityStates.addOrUpdateState(s,c),e.entityAdded(r.entityNameLowerCase,r.entityKey,c.state))}})).catch((function(n){e.Config.logger.log(I.c.Warning,"DurableEntitySet: failed to fetch known entity states: ".concat(n)),e.EntityStates.removeStoredEntityIds(t)}))}},{key:"entityStateChangedMessageHandler",value:function(t){var e=this,n=w.GetEntityId(t);this.Config.logger.log(I.c.Trace,"DurableEntitySet: ".concat(n," changed to version ").concat(t.version));var i=this.EntityStates.getState(n);if(t.isEntityDestructed)this.EntityStates.removeState(n),this.entityDeleted(t.entityName,t.entityKey);else if(i){var a=i.version+1;t.version>a?this.fetchAndApplyEntityState(t.entityName,t.entityKey,t.version,0,i.state):t.version===a&&(k.applyPatch(i.state,t.stateDiff),i.version=t.version)}else(this.EntitySets[n]||this.EntitySets[t.entityName])&&setTimeout((function(){return e.fetchAndApplyEntityState(t.entityName,t.entityKey,t.version,0)}),this.RetryBaseIntervalMs)}},{key:"entitySignalResponseHandler",value:function(t){var e=this.SignalResultPromises[t.correlationId];e&&(t.errorMessage?e.reject(new Error(t.errorMessage)):e.resolve(t.result),delete this.SignalResultPromises[t.correlationId])}},{key:"initSignalR",value:function(){var t=this;this.SignalRConn||(this.SignalRConn=(new I.b).withUrl("".concat(x),{httpClient:this.HttpClient,logger:this.Config.logger}).build(),this.SignalRConn.on("entity-state-changed",(function(e){return t.entityStateChangedMessageHandler(e)})),this.SignalRConn.on("entity-signal-response",(function(e){return t.entitySignalResponseHandler(e)})),this.SignalRConn.onclose((function(){return t.reconnectToSignalR()})),this.SignalRConn.start().then((function(){t.Config.logger.log(I.c.Information,"DurableEntitySet: successfully connected to SignalR")}),(function(e){t.Config.logger.log(I.c.Error,"DurableEntitySet: failed to connect to SignalR: ".concat(e))})))}},{key:"reconnectToSignalR",value:function(){var t=this;this.Config.logger.log(I.c.Information,"DurableEntitySet: reconnecting to SignalR..."),this.SignalRConn.start().then((function(){t.Config.logger.log(I.c.Information,"DurableEntitySet: reconnected to SignalR")}),(function(){setTimeout((function(){return t.reconnectToSignalR()}),t.SignalRReconnectIntervalInMs)}))}},{key:"applyStateChangesFrom",value:function(t,e){e.entityKey=t.entityKey;var n=k.createPatch(t,e);k.applyPatch(t,n)}}]),t}();L.Config={logger:I.d.instance},L.HttpClient=new A((function(){return L.Config})),L.EntitySets={},L.SignalResultPromises={},L.SignalRConn=void 0,L.SignalRReconnectIntervalInMs=5e3,L.MaxRetryCount=6,L.RetryBaseIntervalMs=500,L.DefaultMaxKnownEntityIdsToPersist=100,L.EntityStates=new D((function(){return void 0===L.Config.maxKnownEntityIdsToPersist?L.DefaultMaxKnownEntityIdsToPersist:L.Config.maxKnownEntityIdsToPersist}));var P;!function(t){t[t.Fever=1]="Fever",t[t.Headache=2]="Headache",t[t.Nausea=3]="Nausea",t[t.Rash=4]="Rash",t[t.Diarrhea=5]="Diarrhea"}(P||(P={}));var M=n(13);L.setup({fakeUserNamePromise:new Promise((function(t){var e="";fetch("/.auth/me").then((function(t){return t.json()})).then((function(n){if(!n||!n.length)throw new Error("EasyAuth seems to be not configured. Falling back to a fake user name");e=n[0].user_id,t(null)})).catch((function(){e=prompt("Enter your name:","Anonymous"),t(e)}))})),logger:{log:function(t,e){return console.log(e)}}});var T="HealthCheckEntity",F="my-health-check",U=Object(u.l)({msgText:"",state:L.createEntity(T,F,new function t(){Object(r.a)(this,t),this.history=[],this.symptoms=[]})}),_=Object(h.a)(function(t){Object(l.a)(n,t);var e=Object(y.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"sendMessage",value:function(){L.signalEntity(T,F,"sendHealthCheck",U.msgText)}},{key:"render",value:function(){var t=this;return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(d.a,{position:"static",color:"default",className:"app-bar",children:Object(M.jsxs)(g.a,{children:[Object(M.jsx)(f.a,{fullWidth:!0,label:"Your message",InputLabelProps:{shrink:!0},variant:"outlined",size:"small",value:U.msgText,onChange:function(t){return U.msgText=t.target.value},onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),t.sendMessage())}}),Object(M.jsx)(v.a,{width:20}),Object(M.jsx)(S.a,{variant:"contained",color:"default",size:"large",className:"new-appointment-button",onClick:function(){return t.sendMessage()},children:"Send"}),Object(M.jsx)(v.a,{width:40}),Object(M.jsx)(j.a,{}),Object(M.jsx)(v.a,{width:5})]})}),Object(M.jsx)(p.a,{children:U.state.history.map((function(t){return Object(M.jsx)(m.a,{children:Object(M.jsx)(E.a,{className:"appointment-paper",children:Object(M.jsx)(b.a,{container:!0,spacing:2,children:Object(M.jsx)(b.a,{item:!0,xs:2,children:Object(M.jsx)(C.a,{className:"participants-text",children:"Participants:"})})})})})}))})]})}}]),n}(a.a.Component));s.a.render(Object(M.jsx)(_,{}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.e683e6a2.chunk.js.map