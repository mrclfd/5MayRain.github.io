/*页面载入完成后，创建复制按钮*/
!function (e, t, a) { 
  /* code */
  var initCopyCode = function(){
    // var copyHtml = '';
    // var round ='';
    // copyHtml += '<button class="btn-copy" data-clipboard-snippet="">';
    // copyHtml += '<img src="//cdn.jsdelivr.net/gh/5MayRain/ImageHosting@latest/Blog/Website/icon/copy.svg" />';
    // copyHtml += '</button>';
    // round +='<div></div><div class="r2"></div><div class="r3"></div>';
    // $(".highlight table").before(copyHtml);
    // $("figcaption span").before(round);
    new ClipboardJS('.btn-copy', {
        target: function(trigger) {
            return trigger.nextElementSibling;
        }
    });
  }
  initCopyCode();
}(window, document);