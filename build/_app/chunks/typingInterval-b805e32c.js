const r=(o,t)=>Math.floor(Math.random()*(t-o)+o),e=o=>new Promise(t=>setTimeout(t,o)),n=async o=>e(Array.isArray(o)?o[r(0,o.length)]:o);export{e,r as o,n as s};
