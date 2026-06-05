(function() {
  'use strict';

  var TRACKS = [
    { name: '戒网', sub: '《黑神话：孙悟》箫独奏', file: '01-jiewang.mp3' },
    { name: '神话', sub: '一二声部合并 · 箫', file: '02-shenhua.mp3' },
    { name: '天边', sub: '南箫 完整版', file: '03-tianbian.mp3' },
    { name: '梧桐月', sub: '乙巳年八月十五 · 南箫', file: '04-wutongyue.mp3' },
    { name: '新赛马', sub: '加速版', file: '05-xinsaima.mp3' }
  ];

  // Determine audio base path
  var pathname = window.location.pathname;
  var depth = (pathname.indexOf('/CDU-Bamboo/') !== -1 || pathname.indexOf('/CDU-English/') !== -1) ? 1 : 0;
  var audioBase = depth === 1 ? '../刘胜工作室/' : '刘胜工作室/';

  // Restore state
  var state = { track: 0, time: 0 };
  try {
    var s = JSON.parse(localStorage.getItem('cdgufei_audio_state') || '{}');
    if (typeof s.track === 'number' && s.track < TRACKS.length) state.track = s.track;
    if (typeof s.time === 'number') state.time = s.time;
  } catch(e) {}

  // Audio element
  var audio = document.createElement('audio');
  audio.setAttribute('playsinline', '');
  audio.setAttribute('webkit-playsinline', '');
  audio.style.display = 'none';
  audio.preload = 'metadata';
  audio.src = audioBase + TRACKS[state.track].file;

  audio.addEventListener('ended', function() { nextTrack(); });
  audio.addEventListener('timeupdate', saveState);
  audio.addEventListener('error', function(e) {
    console.warn('AudioPlayer error:', audio.error ? audio.error.code : 'unknown');
  });
  audio.addEventListener('canplay', function() {
    var btn = document.getElementById('ab-play');
    if (btn) { btn.textContent = '▶'; btn.style.opacity = '1'; }
  });
  audio.addEventListener('waiting', function() {
    var btn = document.getElementById('ab-play');
    if (btn) { btn.textContent = '⟳'; }
  });

  function saveState() {
    state.time = audio.currentTime;
    try { localStorage.setItem('cdgufei_audio_state', JSON.stringify(state)); } catch(e) {}
  }

  function nextTrack() {
    state.track = (state.track + 1) % TRACKS.length;
    state.time = 0;
    loadTrack(true);
  }

  function prevTrack() {
    state.track = (state.track - 1 + TRACKS.length) % TRACKS.length;
    state.time = 0;
    loadTrack(true);
  }

  function loadTrack(autoplay) {
    var wasPlaying = !audio.paused;
    audio.src = audioBase + TRACKS[state.track].file;
    audio.load();
    saveState();
    updateUI();
    if (autoplay || wasPlaying) { var p = audio.play(); if (p) p.catch(function(){}) }
  }

  // Build UI
  var bar = document.createElement('div');
  bar.id = 'cdgufei-audio-bar';
  
  // Inject styles separately (innerHTML <style> unreliable on some mobiles)
  var css = document.createElement('style');
  css.textContent =
    '#cdgufei-audio-bar,#cdgufei-audio-bar *{box-sizing:border-box;margin:0;padding:0}' +
    '#cdgufei-audio-bar{position:fixed;bottom:0;left:0;right:0;z-index:2147483647;background:rgba(10,22,40,.97);border-top:1px solid rgba(240,165,0,.35);font-family:"Microsoft YaHei","PingFang SC",sans-serif;color:#c8d6e5;font-size:12px;user-select:none;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-overflow-scrolling:touch}' +
    '#cdgufei-audio-bar .ab-row{display:flex;align-items:center;gap:8px;padding:6px 12px;height:44px}' +
    '#cdgufei-audio-bar .ab-label{color:#f0a500;font-size:11px;flex-shrink:0;font-weight:600}' +
    '#cdgufei-audio-bar .ab-track{flex:1;min-width:0;font-size:12px;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#aabbcc}' +
    '#cdgufei-audio-bar .ab-track:active{color:#f0a500}' +
    '#cdgufei-audio-bar .ab-btn{background:none;border:none;color:#8899aa;cursor:pointer;font-size:16px;padding:4px 8px;flex-shrink:0;line-height:1;transition:color .2s;font-family:inherit;border-radius:4px;-webkit-tap-highlight-color:rgba(240,165,0,.2)}' +
    '#cdgufei-audio-bar .ab-btn:active{color:#f0a500;background:rgba(240,165,0,.08)}' +
    '#cdgufei-audio-bar .ab-btn.play{color:#f0a500;font-size:18px}' +
    '#cdgufei-audio-bar .ab-playlist{display:none;border-top:1px solid rgba(240,165,0,.1);max-height:200px;overflow-y:auto;background:rgba(10,22,40,.95);-webkit-overflow-scrolling:touch}' +
    '#cdgufei-audio-bar .ab-playlist.open{display:block}' +
    '#cdgufei-audio-bar .ab-pl-item{padding:10px 16px;cursor:pointer;display:flex;gap:8px;align-items:center;transition:background .2s;font-size:12px;-webkit-tap-highlight-color:rgba(240,165,0,.15)}' +
    '#cdgufei-audio-bar .ab-pl-item:active{background:rgba(240,165,0,.12)}' +
    '#cdgufei-audio-bar .ab-pl-item.active{color:#f0a500;background:rgba(240,165,0,.06)}' +
    '#cdgufei-audio-bar .ab-pl-item .ab-idx{width:22px;text-align:center;color:#556677;font-size:10px;flex-shrink:0}' +
    '#cdgufei-audio-bar .ab-pl-item .ab-name{flex:1;min-width:0}' +
    '#cdgufei-audio-bar .ab-pl-item .ab-sub{color:#556677;font-size:10px;flex-shrink:0}' +
    '#cdgufei-audio-bar .ab-toggle{font-size:10px}' +
    '@media(max-width:768px){' +
      '#cdgufei-audio-bar .ab-row{padding:6px 8px;height:42px}' +
      '#cdgufei-audio-bar .ab-label{font-size:10px;white-space:nowrap}' +
      '#cdgufei-audio-bar .ab-track{font-size:11px}' +
      '#cdgufei-audio-bar .ab-btn{font-size:16px;padding:4px 6px}' +
      '#cdgufei-audio-bar .ab-btn.play{font-size:18px}' +
      '#cdgufei-audio-bar .ab-pl-item{padding:12px 14px;font-size:12px}' +
    '}';
  bar.appendChild(css);
  
  bar.appendChild(css);
  bar.appendChild(audio);
  bar.insertAdjacentHTML('beforeend',
    '<div class="ab-row">' +
    '<span class="ab-label">🎵 刘胜笛箫</span>' +
    '<span class="ab-track" id="ab-track-name"></span>' +
    '<button class="ab-btn" id="ab-prev">⏮</button>' +
    '<button class="ab-btn play" id="ab-play">▶</button>' +
    '<button class="ab-btn" id="ab-next">⏭</button>' +
    '<button class="ab-btn ab-toggle" id="ab-toggle">▴</button>' +
    '</div>' +
    '<div class="ab-playlist" id="ab-playlist"></div>');

  // Build playlist items
  var pl = bar.querySelector('#ab-playlist');
  TRACKS.forEach(function(t, i) {
    var item = document.createElement('div');
    item.className = 'ab-pl-item';
    item.innerHTML = '<span class="ab-idx">' + ('0' + (i + 1)).slice(-2) + '</span><span class="ab-name">' + t.name + '</span><span class="ab-sub">' + t.sub + '</span>';
    item.addEventListener('click', function() {
      state.track = i; state.time = 0; loadTrack(true);
    });
    pl.appendChild(item);
  });

  // Inject on DOM ready
  function inject() {
    if (document.body && !document.getElementById('cdgufei-audio-bar')) {
      document.body.appendChild(bar);
      updateUI();
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }

  function updateUI() {
    var t = TRACKS[state.track];
    var tn = bar.querySelector('#ab-track-name');
    if (tn) tn.textContent = t.name + ' · ' + t.sub;
    bar.querySelectorAll('.ab-pl-item').forEach(function(el, i) {
      el.classList.toggle('active', i === state.track);
    });
  }

  // Button events
  bar.querySelector('#ab-play').addEventListener('click', function() {
    if (audio.paused) {
      audio.play().catch(function(){});
    } else {
      audio.pause();
    }
  });

  bar.querySelector('#ab-next').addEventListener('click', function() { nextTrack(); });
  bar.querySelector('#ab-prev').addEventListener('click', function() { prevTrack(); });

  var listOpen = false;
  bar.querySelector('#ab-track-name').addEventListener('click', function() {
    listOpen = !listOpen;
    bar.querySelector('#ab-playlist').classList.toggle('open', listOpen);
    bar.querySelector('#ab-toggle').textContent = listOpen ? '▾' : '▴';
  });
  bar.querySelector('#ab-toggle').addEventListener('click', function() {
    listOpen = !listOpen;
    bar.querySelector('#ab-playlist').classList.toggle('open', listOpen);
    bar.querySelector('#ab-toggle').textContent = listOpen ? '▾' : '▴';
  });

  audio.addEventListener('play', function() {
    bar.querySelector('#ab-play').textContent = '⏸';
  });
  audio.addEventListener('pause', function() {
    bar.querySelector('#ab-play').textContent = '▶';
  });

})();
