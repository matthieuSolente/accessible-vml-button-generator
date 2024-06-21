 (function($){
  var urlLink,btnText,btnClass,cssBtnClass,fontColor,fontBold,textTransform,fontFamily,fontSize,tbPadding,lrPadding,bRadius,generatedButton,generateCss,width,height, vmlwidth,vmlbottomradius,radiusmax;
 function updateValues() { 
    urlLink = $('#linkUrl').val();
    btnText = $('#btnText').val();
    btnClass = 'class="'+$('#btnClass').val()+'"';
    cssBtnClass = '.'+$('#btnClass').val();
    fontFamily = $('#fontFamily').val();
    fontSize = $('#fontSize').val();
    fontColor = $('#fontColor').val();
    bgColor = $('#bgColor').val();
    tbPadding = $('#tbPadding').val();
    lrPadding = $('#lrPadding').val();
    width =  Math.ceil($(cssBtnClass).outerWidth());
    height =  Math.ceil($(cssBtnClass).outerHeight());
    vmlheight = Math.ceil($(cssBtnClass).outerHeight()+2);
    bgcss = 'background-color:'+$('#bgColor').val();
    bRadius = $('#bRadius').val();
    radiusmax = Math.ceil(height / 2);
   
    if(bRadius <= radiusmax){
      bRadius = $('#bRadius').val();
    } else if ( bRadius > radiusmax ){
      bRadius = radiusmax;
    } 
    vmlbottomradius = Math.ceil(height - bRadius); 
      if($('#fontBold').is(':checked')){
      fontBold = 'font-weight:bold;';
    }else{
      fontBold = '';
    }
    if($('#textTransform').is(':checked')){
      textTransform = 'text-transform:uppercase;';
    }else{
      textTransform = '';
    } 
    generatedButtonPreview ='<!--[if mso ]><table role="presentation" cellspacing="0" cellpadding="0" border="0" style="font-size:0;"><tr><td style="width:'+width+'px;height:'+height+'px;border-radius:'+bRadius+'px;background:'+bgColor+';text-align:center"><![endif]--><a '+btnClass+' href="'+urlLink+'" style="border:1px solid '+bgColor+';font-family:'+fontFamily+';font-size:'+fontSize+'px; mso-line-height-rule:exactly;line-height:'+fontSize+'px;'+fontBold+' '+textTransform+' text-decoration:none;text-underline-color:'+bgColor+';color:'+fontColor+';display:inline-block;background-color:'+bgColor+';border-radius:'+bRadius+'px;padding:'+tbPadding+'px '+lrPadding+'px;mso-border-alt:0">'+btnText+'</a><!--[if mso ]><v:shape stroked="f" filled="t" coordorigin="0 0" coordsize="'+bRadius+' '+vmlheight+'" style="width:'+bRadius+'px;height:'+vmlheight+'px;position:absolute;top:0;left:-'+bRadius+'px;margin-right:-1px" fillcolor="'+bgColor+'" path="m'+bRadius+',0 '+bRadius+','+vmlheight+' qx0,'+vmlbottomradius+' 0,'+bRadius+' qy'+bRadius+',0xe"></v:shape><![endif]--><!--[if (gte mso 9)|(IE)]><v:shape  stroked="f" filled="t" coordorigin="0 0" coordsize="'+bRadius+' '+vmlheight+'" style="width:'+bRadius+'px;height:'+vmlheight+'px;position:absolute;top:0;left:'+width+'px;margin-left:-1px" fillcolor="'+bgColor+'" path="qx'+bRadius+','+bRadius+' '+bRadius+','+vmlbottomradius+' qy0,'+vmlheight+' xe"></v:shape><![endif]--><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->';
    generatedButton = '&lt;!--[if mso ]&gt;&lt;table role="presentation" cellspacing="0" cellpadding="0" border="0" style="font-size:0;"&gt;&lt;tr&gt;&lt;td style="width:'+width+'px;height:'+height+'px;border-radius:'+bRadius+'px;background:'+bgColor+';text-align:center"&gt;&lt;![endif]--&gt;&lt;a '+btnClass+' href="'+urlLink+'" style="border:1px solid '+bgColor+';font-family:'+fontFamily+';font-size:'+fontSize+'px; mso-line-height-rule:exactly;line-height:'+fontSize+'px;'+fontBold+' '+textTransform+' text-decoration:none;text-underline-color:'+bgColor+';color:'+fontColor+';display:inline-block;background-color:'+bgColor+';border-radius:'+bRadius+'px;padding:'+tbPadding+'px '+lrPadding+'px;mso-border-alt:0"&gt;'+btnText+'&lt;/a&gt;&lt;!--[if mso ]&gt;&lt;v:shape stroked="f" filled="t" coordorigin="0 0" coordsize="'+bRadius+' '+vmlheight+'" style="width:'+bRadius+'px;height:'+vmlheight+'px;position:absolute;top:0;left:-'+bRadius+'px;margin-right:-1px" fillcolor="'+bgColor+'" path="m'+bRadius+',0 '+bRadius+','+vmlheight+' qx0,'+vmlbottomradius+' 0,'+bRadius+' qy'+bRadius+',0xe"&gt;&lt;/v:shape&gt;&lt;![endif]--&gt;&lt;!--[if (gte mso 9)|(IE)]&gt;&lt;v:shape  stroked="f" filled="t" coordorigin="0 0" coordsize="'+bRadius+' '+vmlheight+'" style="width:'+bRadius+'px;height:'+vmlheight+'px;position:absolute;top:0;left:'+width+'px;margin-left:-1px" fillcolor="'+bgColor+'" path="qx'+bRadius+','+bRadius+' '+bRadius+','+vmlbottomradius+' qy0,'+vmlheight+' xe"&gt;&lt;/v:shape&gt;&lt;![endif]--&gt;&lt;!--[if (gte mso 9)|(IE)]&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;![endif]--&gt;';
    if($('#fontColor').val()==='#ffffff'||$('#fontColor').val()==='#fff'){
      generateCss = '&lt;!--[if gte mso 16]&gt;\n&lt;style&gt;\n '+cssBtnClass+'{\nbackground: transparent !important;\nmso-style-textfill-type:gradient;\n mso-style-textfill-fill-gradientfill-stoplist:&quot;0 \#FFFFFF 0 100000\,100000 \#FFFFFF 0 100000&quot;;\ncolor:#000000 !important;\n background: transparent !important;\n}\n&lt;/style&gt;\n&lt;![endif]--&gt;';
    }else if($('#fontColor').val()==='#000000'){
      generateCss = '&lt;!--[if gte mso 16]&gt;\n&lt;style&gt;\n'+cssBtnClass+'{\nbackground: transparent !important;\nmso-style-textfill-type:gradient;\n mso-style-textfill-fill-gradientfill-stoplist:&quot;0 \#000000 1 100000\,99000 \#000000 1 100000&quot;;\ncolor:#ffffff !important;\n background: transparent !important;\n}\n&lt;/style&gt;\n&lt;![endif]--&gt;';
    }else{
      generateCss = '&lt;!--[if gte mso 16]&gt;\n&lt;style&gt;\n'+cssBtnClass+'{\nbackground: transparent !important;\n}\n&lt;/style&gt;\n&lt;![endif]--&gt;';
    }
    $('#preview').html(generatedButtonPreview);
    $('#code').html(generatedButton);
    if($('#fontColor').val()){
      $('#css-code').show();
      $('#css').html(generateCss);
    }else{
      $('#css-code').hide();
      $('#css').html('');
    }
}updateValues();
let filtersChange = $('.wrapper').find('select,input');
filtersChange.on('input change', function(e) {
  updateValues();
});
$(document).ready(function(){
  updateValues();
})

})(jQuery);



function copyCode(){
    var text = document.getElementById("code").innerText;
    navigator.clipboard.writeText(text);
    alert('copied');
}
