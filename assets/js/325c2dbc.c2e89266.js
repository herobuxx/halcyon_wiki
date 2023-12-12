"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[673],{9838:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=r(5893),s=r(1151);const l={slug:"/docs/device-req",sidebar_position:1},t="Halcyon Official device Requirements",o={id:"docs/device_requirements",title:"Halcyon Official device Requirements",description:"You can check reference of used keyword here.",source:"@site/docs/docs/device_requirements.md",sourceDirName:"docs",slug:"/docs/device-req",permalink:"/docs/device-req",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/docs/device-req",sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"rosemary",permalink:"/devices/rosemary"},next:{title:"Halcyon Device Source Code Guidelines",permalink:"/docs/device-guidelines"}},c={},d=[{value:"Architecture",id:"architecture",level:2},{value:"Audio",id:"audio",level:2},{value:"RIL",id:"ril",level:2},{value:"Wi-Fi",id:"wi-fi",level:2},{value:"USB",id:"usb",level:2},{value:"GPS",id:"gps",level:2},{value:"Camera",id:"camera",level:2},{value:"Video Recording",id:"video-recording",level:2},{value:"Fingerprint Sensor",id:"fingerprint-sensor",level:2},{value:"Accelerometer",id:"accelerometer",level:2},{value:"Gyroscope",id:"gyroscope",level:2},{value:"Proximity",id:"proximity",level:2},{value:"Light",id:"light",level:2},{value:"Other Sensors",id:"other-sensors",level:2},{value:"SELinux status",id:"selinux-status",level:2},{value:"Authorship",id:"authorship",level:2},{value:"Stability",id:"stability",level:2},{value:"Exceptions",id:"exceptions",level:2}];function a(e){const i={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"halcyon-official-device-requirements",children:"Halcyon Official device Requirements"}),"\n",(0,n.jsxs)(i.p,{children:["You can check reference of used keyword ",(0,n.jsx)(i.a,{href:"https://datatracker.ietf.org/doc/html/rfc2119",children:"here"}),"."]}),"\n",(0,n.jsx)(i.p,{children:"Halcyon Official Devices have to complete following requirements:"}),"\n",(0,n.jsx)(i.h2,{id:"architecture",children:"Architecture"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"The device have to be ARM64 Based."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"audio",children:"Audio"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"All devices MUST support audio playback for media content."}),"\n",(0,n.jsx)(i.li,{children:"Phones MUST support in-call audio."}),"\n",(0,n.jsx)(i.li,{children:"Phones MUST support speaker audio."}),"\n",(0,n.jsx)(i.li,{children:"Tablet devices capable of in-call audio/speaker audio MUST support in-call/speaker audio."}),"\n",(0,n.jsx)(i.li,{children:"Devices SHOULD support any additional audio configuration inherent to their device (eg. echo cancellation, extra mics, etc)."}),"\n",(0,n.jsx)(i.li,{children:"All devices MUST support any other audio output supported by their stock OS (eg. headphone jack, USB-C, BT)."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"ril",children:"RIL"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"All devices with RIL supported in their stock OS MUST support RIL for phone calls & data."}),"\n",(0,n.jsx)(i.li,{children:"All devices with RIL supported in their stock OS MUST support emergency calling with a SIM inserted (112/911)."}),"\n",(0,n.jsx)(i.li,{children:"Data-only devices (defined as devices that have a RIL but do not support telephony stack due to hardware/firmware restrictions) are EXEMPTED from phone & emergency dialing requirements."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"wi-fi",children:"Wi-Fi"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"All devices with Wi-Fi supported in their stock OS MUST support Wi-Fi."}),"\n",(0,n.jsx)(i.li,{children:"All devices with Wi-Fi MUST report same MAC address as on stock OS."}),"\n",(0,n.jsx)(i.li,{children:"All devices with Wi-Fi hotspot capabilities MUST support Wi-Fi tethering."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"usb",children:"USB"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"All devices with a USB port MUST support file access via MTP."}),"\n",(0,n.jsx)(i.li,{children:"All devices with USB tethering supported on their stock OS MUST support USB tethering."}),"\n",(0,n.jsx)(i.li,{children:"All devices with a USB port & Data SHOULD support USB tethering."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"gps",children:"GPS"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"All devices with GPS supported in their stock OS MUST support GPS."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"camera",children:"Camera"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"All devices with Camera supported in their stock OS MUST support Camera, in both front facing and rear camera configurations."}),"\n",(0,n.jsx)(i.li,{children:"All devices with Dual (or more) Rear Cameras SHOULD support all rear cameras."}),"\n",(0,n.jsx)(i.li,{children:"All devices with Dual (or more) Front Facing Cameras SHOULD support all front cameras."}),"\n",(0,n.jsx)(i.li,{children:"All Camera HAL versions accessible with the device's Camera HAL MUST comply with the Camera and Video Recording requirements."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"video-recording",children:"Video Recording"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"All devices with Video Recording supported in their stock OS MUST support Video Recording, in both front facing and rear camera configurations."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"fingerprint-sensor",children:"Fingerprint Sensor"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"All devices with a Fingerprint Sensor MUST support the Fingerprint Sensor if the stock OS supports it with Marshmallow or higher Android versions."}),"\n",(0,n.jsx)(i.li,{children:"All devices with a Fingerprint Sensor SHOULD support the Fingerprint Sensor if the stock OS supports it for all other Android versions."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"accelerometer",children:"Accelerometer"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"All devices with an accelerometer MUST support the accelerometer."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"gyroscope",children:"Gyroscope"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"All devices with a gyroscope MUST support the gyroscope."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"proximity",children:"Proximity"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"All devices with a proximity sensor MUST support the proximity sensor."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"light",children:"Light"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"All devices with a light sensor MUST support the light sensor."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"other-sensors",children:"Other Sensors"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"All other sensors supported by a device\u2019s stock OS SHOULD be supported."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"selinux-status",children:"SELinux status"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"All devices MUST be configured for SELinux Enforcing. Exceptions MAY be made for this."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"authorship",children:"Authorship"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"All commits MUST have proper authorship to the author of the commits."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"stability",children:"Stability"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"If your build is deemed unstable by the team you may not be allowed to maintain officially."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"exceptions",children:"Exceptions"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Exceptions MAY be made for some of these mentioned requirements."}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["This document uses work from LineageOS ",(0,n.jsx)(i.a,{href:"https://github.com/LineageOS/charter/blob/master/device-support-requirements.md",children:"device support requirements"})," which is licensed under CC-BY-3.0, some modifications were made to it."]})]})}function h(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},1151:(e,i,r)=>{r.d(i,{Z:()=>o,a:()=>t});var n=r(7294);const s={},l=n.createContext(s);function t(e){const i=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),n.createElement(l.Provider,{value:i},e.children)}}}]);