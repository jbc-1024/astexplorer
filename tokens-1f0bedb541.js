"use strict";var tagTokensFromDict=function(n){for(var a=Object.keys(n),r="",e=0,o=a;e<o.length;e++){var t=o[e],c=n[t],s="";canOpenClose(c)&&(s="open-entry"),c=tagTokens(c),r+='\n        <li  class="dict-element openable-wapper">\n            <span class="'.concat(s,"\" style='color:#636468'>").concat(t,"</span>\n            <span>:</span> \n            <span>").concat(c,"</span>\n        </li>")}for(var l="",p=0,i=a;p<i.length;p++){var y=i[p],g=n[y];isDict(g)?g="{...}":isArray(g)&&(g="Array(".concat(d.length,") ")),l+="\n        <span>\n            ".concat(y,": ").concat(g,",\n        </span>")}return openableTamplate(r,l,"dict")},tagTokensFromArray=function(n){for(var a="Array(".concat(n.length,") "),r="",e=0;e<n.length;e+=10)r+=tagTokensFromArrayGroup(n,e,e+10);var o=openableTamplate(r,null,"array");return"\n    <span class='node'>\n        <span class='open-entry'>\n            ".concat(a,"\n        </span>\n\n        ").concat(o,"\n        \n    </span>\n    ")},tagTokensFromArrayGroup=function(n,a,r){for(var e="[".concat(a," .... ").concat(r,"]"),o="",t=a;t<r;t++){var c=n[t];c=tagTokens(c),o+="<li class='dict-element openable-wapper' data-indice='".concat(t,"'>\n            <span class=\"open-entry\" style='color:#821D79'>").concat(t,"</span>\n            :\n            ").concat(c,"\n        <li>\n        ")}var s=openableTamplate(o,null,"array");return"\n    <span class='node openable-wapper'>\n        <li class='open-entry'> ".concat(e," </li>\n        ").concat(s,"\n        \n    </span>\n    ")},tagTokens=function(n){return isDict(n)?tagTokensFromDict(n):isArray(n)?tagTokensFromArray(n):isBool(n)?n:isNumber(n)?n:isString(n)?n:isNull(n)?n:void 0};