(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return O})),n.d(t,"metadata",(function(){return w})),n.d(t,"rightToc",(function(){return y})),n.d(t,"default",(function(){return j}));var r=n(2),a=n(6),o=n(0),i=n.n(o),l=n(115),c=n(125),u=n(116),s=n(62),d=n.n(s),b=37,p=39;var f=function(e){var t=e.block,n=e.children,r=e.defaultValue,a=e.values,l=e.groupId,s=e.className,f=Object(c.a)(),m=f.tabGroupChoices,O=f.setTabGroupChoices,w=Object(o.useState)(r),y=w[0],v=w[1],j=Object(o.useState)(!1),h=j[0],g=j[1];if(null!=l){var x=m[l];null!=x&&x!==y&&a.some((function(e){return e.value===x}))&&v(x)}var N=function(e){v(e),null!=l&&O(l,e)},T=[],k=function(e){e.metaKey||e.altKey||e.ctrlKey||g(!0)},C=function(){g(!1)};return Object(o.useEffect)((function(){return window.addEventListener("keydown",k),window.addEventListener("mousedown",C),function(){window.removeEventListener("keydown",k),window.removeEventListener("mousedown",C)}}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(u.a)("tabs",{"tabs--block":t},s)},a.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(u.a)("tabs__item",d.a.tabItem,{"tabs__item--active":y===t}),style:h?{}:{outline:"none"},key:t,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(T,e.target,e),k(e)},onFocus:function(){return N(t)},onClick:function(){N(t),g(!1)},onPointerDown:function(){return g(!1)}},n)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(n).filter((function(e){return e.props.value===y}))[0]))};var m=function(e){return i.a.createElement("div",null,e.children)},O={id:"tools",title:"Installing Tools",slug:"/tools"},w={unversionedId:"tools",id:"tools",isDocsHomePage:!1,title:"Installing Tools",description:"<Tabs",source:"@site/docs/installing_tools.mdx",slug:"/tools",permalink:"/docs/tools",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/installing_tools.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Features Compared",permalink:"/docs/features"},next:{title:"Adding a new Keyboard",permalink:"/docs/add"}},y=[],v={rightToc:y};function j(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},v,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)(f,{defaultValue:"windows",values:[{label:"Windows",value:"windows"},{label:"MacOS",value:"macos"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},Object(l.b)(m,{value:"windows",mdxType:"TabItem"},Object(l.b)("p",null,"  Install the Arduino IDE via the installer (NOT the Windows App Store variant): ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.arduino.cc/en/main/software"}),"https://www.arduino.cc/en/main/software")),Object(l.b)("p",null,"Open Arduino, add ",Object(l.b)("inlineCode",{parentName:"p"},"https://www.adafruit.com/package_adafruit_index.json")," as an ",Object(l.b)("inlineCode",{parentName:"p"},"Additional Board Manager URL"),' in Preferences. While you\'re at it, checking the two "verbose" checkboxes in preferences will help you see compilation details and the commands being used from the IDE.'),Object(l.b)("p",null,"Install required packages from ",Object(l.b)("inlineCode",{parentName:"p"},'Tools -> Board: "some boardName" -> Boards manager'),"."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Adafruit nRF52")),Object(l.b)("p",null,"After this you are ready to build using ",Object(l.b)("inlineCode",{parentName:"p"},"build.ps1")," in ",Object(l.b)("inlineCode",{parentName:"p"},"build/windows")," in PowerShell")),Object(l.b)(m,{value:"macos",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"$ brew cask install arduino\n")),Object(l.b)("p",null,"Open Arduino, add ",Object(l.b)("inlineCode",{parentName:"p"},"https://www.adafruit.com/package_adafruit_index.json")," as an ",Object(l.b)("inlineCode",{parentName:"p"},"Additional Board Manager URL"),' in Preferences. While you\'re at it, checking the two "verbose" checkboxes in preferences will help you see compilation details and the commands being used from the IDE.'),Object(l.b)("p",null,"Install required packages from ",Object(l.b)("inlineCode",{parentName:"p"},'Tools -> Board: "some boardName" -> Boards manager'),"."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Adafruit nRF52"),Object(l.b)("li",{parentName:"ul"},"Arduino SAMD Boards (note: It's unclear if this is really needed)"),Object(l.b)("li",{parentName:"ul"},"Adafruit SAMD Boards (note: It's unclear if this is really needed)")),Object(l.b)("p",null,"After this you are ready to build using ",Object(l.b)("inlineCode",{parentName:"p"},"build-macos")," in ",Object(l.b)("inlineCode",{parentName:"p"},"build/macos/"))),Object(l.b)(m,{value:"linux",mdxType:"TabItem"},"This is a banana \ud83c\udf4c",Object(l.b)("p",null,"  We need your help documenting the steps needed for Linux installs."))))}j.isMDXComponent=!0},115:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),p=r,f=d["".concat(i,".").concat(p)]||d[p]||b[p]||o;return n?a.a.createElement(f,l(l({ref:t},u),{},{components:n})):a.a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},116:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},125:function(e,t,n){"use strict";var r=n(0),a=n(126);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},126:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a}}]);