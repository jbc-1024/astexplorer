"use strict";var tagTreeFromDict=function(t,n){for(var a="",s=0,e=Object.keys(t);s<e.length;s++){var c=e[s],r=t[c],o="",l="";canOpenClose(r)&&(o="key-entry",l="underline");var p=n.concat([c]);r=tagTree(r,p),a+="\n\t\t<li data-indice='".concat(p.join("."),'\' class="dict-element">\n\t\t\t<span  class="').concat(o," ").concat(l,' dict-key">').concat(c,'</span>\n\t\t\t<span class="p">:</span>\n\t\t\t').concat(r,"\n\t\t</li>\n\t\t")}var i='\n\t<span class="detailed hide">\n\t\t<span class="p"> { </span>\n\t\t\t<ul>\n\t\t\t\t'.concat(a,'\n\t\t\t</ul>\n\t\t<span class="p"> } </span>\n\t</span>'),u=Object.keys(t).join(", "),g='\n\t<span class=" undetailed">\n\t\t<span class="p"> { </span>\n\t\t<span class="general"> '.concat(u,' </span>\n\t\t<span class="p"> } </span>\n\t</span>');return"<span  class='dict openable'>\n\t\t\t\t".concat(i,"\n\t\t\t\t").concat(g,"\n\t\t\t</span>")},tagTreeFromArray=function(t,n){for(var a=contains(t),s="",e=0;e<t.length;e+=1){var c=t[e],r=n.concat([e]);c=tagTree(c,r),s+="\n\t\t<li data-indice='".concat(r.join("."),'\' class="array-element">\n\t\t\t').concat(c,"\n\t\t</li>\n\t\t")}a='\n\t<span class=" detailed hide">\n\t\t<span class="p"> [ </span>\n\t\t\t<ul>\n\t\t\t\t'.concat(s,'\n\t\t\t</ul>\n\t\t<span class="p"> ] </span>\n\t</span>');var o=t.length,l="";0!=o&&(l="".concat(o," element"));var p='\n\t<span class="undetailed">\n\t\t<span class="p"> [ </span>\n\t\t<span class="general"> '.concat(l,' </span>\n\t\t<span class="p"> ] </span>\n\t</span>');return"<span class='array openable'>\n\t\t".concat(a,"\n\t\t").concat(p,"\n\t</span>")},tagTreeFromNode=function(t,n){var a=tagTreeFromDict(t,n);return"\n\t<span  data-indice='".concat(n.join("."),'\' class="node">\n\t\t<span  class="type-entry underline ">').concat(t.type,"</span>\n\t\t").concat(a,"\n\t</span>\n\t")},tagTreeFromBool=function(t){return'<span class="bool">'.concat(t,"</span>")},tagTreeFromNumber=function(t){return'<span class="number">'.concat(t,"</span>")},tagTreeFromString=function(t){return'<span class="string"> \''.concat(t,"' </span>")},tagTreeFromNull=function(t){return'<span class="null"> '.concat(t," </span>")},tagTree=function(t,n){return isDict(t)?isNode(t)?tagTreeFromNode(t,n):tagTreeFromDict(t,n):isArray(t)?tagTreeFromArray(t,n):isBool(t)?tagTreeFromBool(t):isNumber(t)?tagTreeFromNumber(t):isString(t)?tagTreeFromString(t):isNull(t)?tagTreeFromNull(t):void 0};