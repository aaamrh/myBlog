function setClipboardText(event){ 
  event.preventDefault();
  if (typeof window.getSelection == "undefined") return; //IE8 及更老的版本不兼容

  var node = document.createElement('div');
  var selection = window.getSelection();
  var htmlData, textData;

  
  node.appendChild(selection.getRangeAt(0).cloneContents());
  //getRangeAt(0)返回对基于零的数字索引与传递参数匹配的选择对象中的范围的引用。对于连续选择，参数应为零。

  
  if (("" + selection).length >= 50) {
    htmlData = node.innerHTML 
      + '<br />-------------------------------------------------<br />' 
      + '<div>著作权归作者所有。<br />' 
      + '商业转载请联系作者获得授权，非商业转载请注明出处。<br />'
      + '作者：铁头马<br />链接：http://www.maruihua.cn<br />'
      + '</div>';
    textData = selection.getRangeAt(0)+'\n\n' 
      + '-------------------------------------------------\n'
      + '著作权归作者所有。\n' 
      + '商业转载请联系作者获得授权，非商业转载请注明出处。\n'
      + '作者：铁头马\n'
      + '链接：http://www.maruihua.cn   \n';
  }else{
    htmlData = node.innerHTML;
    textData = selection.getRangeAt(0);
  }

  
  if(event.clipboardData){  
      event.clipboardData.setData("text/html", htmlData);
      //setData(剪贴板格式, 数据) 给剪贴板赋予指定格式的数据。返回 true 表示操作成功。 
      event.clipboardData.setData("text/plain",textData);
  }
  else if(window.clipboardData){ //window.clipboardData的作用是在页面上将需要的东西复制到剪贴板上，提供了对于预定义的剪贴板格式的访问，以便在编辑操作中使用。 
      return window.clipboardData.setData("text", textData);  
  }  
};  
 

document.body.addEventListener('copy',function(e){
  setClipboardText(e);
});

