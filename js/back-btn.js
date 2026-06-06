(function(){
  'use strict';
  if(document.getElementById('cdgufei-global-back')) return;
  if(window.location.pathname.replace(/\/$/,'').endsWith('/cdu-gufei-web-demo')&&!window.location.pathname.replace(/\/$/,'').match(/\.html$/)) return;
  // Find existing back link
  var existing = document.querySelector('.back-btn') || document.querySelector('.back-link');
  var href = 'index.html';
  if(existing){ var h=existing.getAttribute('href'); if(h&&h!=='#')href=h; }
  
  var bar = document.createElement('div');
  bar.id = 'cdgufei-global-back';
  bar.innerHTML = '<style>'+
    '#cdgufei-global-back{position:fixed;top:0;left:0;right:0;z-index:9997;height:32px;display:flex;align-items:center;padding:0 12px;background:rgba(10,22,40,.94);border-bottom:1px solid rgba(240,165,0,.1);font-family:"Microsoft YaHei","PingFang SC",sans-serif;font-size:12px}'+
    '#cdgufei-global-back a{color:#8899aa;text-decoration:none;transition:color .2s}'+
    '#cdgufei-global-back a:hover{color:#f0a500}'+
    '#cdgufei-global-back .gb-title{flex:1;text-align:right;color:#556677;font-size:11px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-left:8px}'+
    '@media(min-width:769px){#cdgufei-global-back{display:none}}'+
  '</style>'+
  '<a href="'+href+'">◀ 返回</a>'+
  '<span class="gb-title">'+document.title.replace(/ - .*/,'').replace('·.+$/','').substring(0,20)+'</span>';
  
  function inject(){
    if(document.body){document.body.insertBefore(bar,document.body.firstChild);document.body.style.paddingTop='32px'}
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',inject)}
  else{inject()}
})();
