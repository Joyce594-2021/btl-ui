(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"9kvl":function(r,e,n){"use strict";var t=n("FfOG");n.d(e,"a",(function(){return t["b"]}));n("bCY9")},afA6:function(r,e,n){"use strict";n.r(e);var t=n("0Owb"),i=n("q1tI"),a=n.n(i),o=n("q3YX"),p=n("9og8"),s=n("WmNS"),l=n.n(s),c=n("rlch"),d="import React from 'react';\r\nimport Alert from '../index';\r\nimport '../style';\r\n\r\nexport default () => <Alert kind=\"warning\">\u8fd9\u662f\u4e00\u6761\u8b66\u544a\u63d0\u793a</Alert>;",u="import React, { PropsWithChildren } from 'react';\r\nimport t from 'prop-types';\r\n\r\nexport interface AlertProps {\r\n  /**\r\n   * @description       Alert \u7684\u7c7b\u578b\r\n   * @default           'info'\r\n   */\r\n  kind?: 'info' | 'positive' | 'negative' | 'warning';\r\n}\r\n\r\nexport type KindMap = Record<Required<AlertProps>['kind'], string>;\r\n\r\nconst prefixCls = 'happy-alert';\r\n\r\nconst kinds: KindMap = {\r\n  info: '#5352ED',\r\n  positive: '#2ED573',\r\n  negative: '#FF4757',\r\n  warning: '#FFA502',\r\n};\r\n\r\nconst Alert: React.FC<PropsWithChildren<AlertProps>> = ({ children, kind = 'info', ...rest }) => (\r\n  <div\r\n    className={prefixCls}\r\n    style={{\r\n      background: kinds[kind],\r\n    }}\r\n    {...rest}\r\n  >\r\n    {children}\r\n  </div>\r\n);\r\n\r\nAlert.propTypes = {\r\n  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),\r\n};\r\n\r\nexport default Alert;",f="import './index.less';",m="@popupPrefix: happy-alert;\r\n\r\n.@{popupPrefix} {\r\n  padding: 20px;\r\n  background: white;\r\n  border-radius: 3px;\r\n  color: white;\r\n}",x={"alert-basic":{component:Object(c["c"])({loader:function(){var r=Object(p["a"])(l.a.mark((function r(){return l.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,n.e(3).then(n.bind(null,"025M"));case 2:return r.abrupt("return",r.sent.default);case 3:case"end":return r.stop()}}),r)})));function e(){return r.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:d},"index.tsx":{import:"../index",content:u},"style/index.ts":{import:"../style",content:f},"style/index.less":{import:"./index.less",content:m}},dependencies:{react:{version:"18.2.0"},"prop-types":{version:"15.8.1"}},componentName:"alert",identifier:"alert-basic"}}},h=n("x2v5"),v=n("KcUY"),b=n.n(v);e["default"]=r=>a.a.createElement(b.a,Object(t["a"])({},r,{config:o,demos:x,apis:h}))},q3YX:function(r){r.exports=JSON.parse('{"menus":{"en-US":{"/alert":[{"title":"\u53cd\u9988","meta":{"order":1,"__fallback":true},"children":[{"path":"/alert","title":"Alert \u8b66\u544a\u63d0\u793a","meta":{}}]}],"*":[{"path":"/","title":"Happy UI","meta":{}}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"title":"\u7ec4\u4ef6","order":2,"path":"/alert"}]},"title":"Happy UI","mode":"site","repository":{"url":"","branch":"master"},"theme":{},"exportStatic":{}}')},x2v5:function(r){r.exports=JSON.parse('{"alert":{"default":[{"identifier":"kind","description":"Alert \u7684\u7c7b\u578b","type":"\\"info\\" | \\"positive\\" | \\"negative\\" | \\"warning\\"","default":"info"}]}}')}}]);