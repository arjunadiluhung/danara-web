<!DOCTYPE html>
<html>
<head>
    <title>DPP Inkindo</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="user-scalable=no, initial-scale=0.5, width=device-width, viewport-fit=cover" />
    <link rel="preload" href="script.js?v=1706518917748" as="script"/>
<link rel="preload" href="media/panorama_412DE27B_4D70_1EE3_41C6_26A42E423369_0/l/3/0_0.jpg?v=1706518917748" as="image"/>
<link rel="preload" href="media/panorama_412DE27B_4D70_1EE3_41C6_26A42E423369_0/r/3/0_0.jpg?v=1706518917748" as="image"/>
<link rel="preload" href="media/panorama_412DE27B_4D70_1EE3_41C6_26A42E423369_0/u/3/0_0.jpg?v=1706518917748" as="image"/>
<link rel="preload" href="media/panorama_412DE27B_4D70_1EE3_41C6_26A42E423369_0/d/3/0_0.jpg?v=1706518917748" as="image"/>
<link rel="preload" href="media/panorama_412DE27B_4D70_1EE3_41C6_26A42E423369_0/f/3/0_0.jpg?v=1706518917748" as="image"/>
<link rel="preload" href="media/panorama_412DE27B_4D70_1EE3_41C6_26A42E423369_0/b/3/0_0.jpg?v=1706518917748" as="image"/>
<script>(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");ga("create", "UA-116087-3", "auto"); ga("send", "pageview");</script>
<meta name="description" content="Virtual Tour"/>
<meta name="theme-color" content="#FFFFFF"/>
    <script src="lib/tdvplayer.js?v=1706518917748"></script>
    <script>
        var path = 'media/Gambar/' + '{{$path}}' 
        var xBanner1 = 'media/fotobanner/' + '{{$xbannerpath1}}'
        var xBanner2 = 'media/fotobanner/' + '{{$xbannerpath2}}'
        var logoPath = 'media/Logo PT Atas/' + '{{$logo}}'
        if({{$isOnline}} == 1){
            statusPath = 'media/Lampu Onlline Offline/hijau.png';
            // onlinePath = 'media/panorama_376712F1_3B72_B729_41BA_335DD9044B01_0_HS_10_0.png';
        }else{
            // offlinePath = 'media/panorama_376712F1_3B72_B729_41BA_335DD9044B01_0_HS_9_0.png';
            statusPath = 'media/Lampu Onlline Offline/merah.png';
        }
    </script>
    <script type="text/javascript">
        var player;
        var playersPlayingTmp = [];
        var isInitialized = false;
        var isPaused = false;

        function loadTour()
        {
            if(player)
                return;

            var beginFunc = function(event){
                if(event.name == 'begin')
                {
                    var camera = event.data.source.get('camera');
                    if(camera && camera.get('initialSequence') && camera.get('initialSequence').get('movements').length > 0)
                        return;
                }

                if(event.sourceClassName == "MediaAudio")
                    return;

                isInitialized = true;

                player.unbind('preloadMediaShow', beginFunc, player, true);
                player.unbindOnObjectsOf('PanoramaPlayListItem', 'begin', beginFunc, player, true);
                player.unbind('stateChange', beginFunc, player, true);
                window.parent.postMessage("tourLoaded", '*');

                disposePreloader();

                onVirtualTourLoaded();
            };

            var settings = new TDV.PlayerSettings();
            
            settings.set(TDV.PlayerSettings.CONTAINER, document.getElementById('viewer'));
            settings.set(TDV.PlayerSettings.SCRIPT_URL, 'script.js?v=1706518917748');
            settings.set(TDV.PlayerSettings.WEBVR_POLYFILL_URL, 'lib/WebVRPolyfill.js?v=1706518917748');
            settings.set(TDV.PlayerSettings.HLS_URL, 'lib/Hls.js?v=1706518917748');
            settings.set(TDV.PlayerSettings.QUERY_STRING_PARAMETERS, 'v=1706518917748');
            window.tdvplayer = player = TDV.PlayerAPI.create(settings);
            player.bind('preloadMediaShow', beginFunc, player, true);
            player.bind('stateChange', beginFunc, player, true);
            player.bindOnObjectsOf('PanoramaPlayListItem', 'begin', beginFunc, player, true);
            player.bindOnObject('rootPlayer', 'start', function(e){
                var queryDict = {}; location.search.substr(1).split("&").forEach(function(item) {var k = item.split("=")[0], v = decodeURIComponent(item.split("=")[1]);queryDict[k] = v});
                var item = undefined;
                if("media-index" in queryDict){
                    item = setMediaByIndex(parseInt(queryDict["media-index"]) - 1);
                }
                else if("media-name" in queryDict){
                    item = setMediaByName(queryDict["media-name"]);
                }
                else{
                    item = setMediaByIndex(0);
                }
                if(item != undefined && "trigger-overlay-name" in queryDict){
                    triggerOverlayByName(item, queryDict["trigger-overlay-name"], "trigger-overlay-event" in queryDict ? queryDict["trigger-overlay-event"] : "click");
                }

                player.getById('rootPlayer').bind('tourEnded', function(){
                    onVirtualTourEnded();
                }, player, true);
            }, player, false);

            /* Listen messages */
            window.addEventListener('message', function (e) {
                //Listen to messages for make actions to player in the format function:param1,param2
                var action = e.data;
                if (action == 'pauseTour' || action == 'resumeTour') {
                    this[action].apply(this);
                }
            });
        }

        function pauseTour()
        {
            isPaused = true;
            if(!isInitialized)
                return;

            var playLists = player.getByClassName('PlayList');
            for(var i = 0, count = playLists.length; i<count; i++)
            {
                var playList = playLists[i];
                var index = playList.get('selectedIndex');
                if(index != -1)
                {
                    var item = playList.get('items')[index];
                    var itemPlayer = item.get('player');
                    if(itemPlayer && itemPlayer.pause)
                    {
                        playersPlayingTmp.push(itemPlayer);
                        itemPlayer.pause();
                    }
                }
            }

            player.getById('pauseGlobalAudios')();
        }

        function resumeTour()
        {
            isPaused = false;
            if(!isInitialized)
                return;

            while(playersPlayingTmp.length)
            {
                var viewer = playersPlayingTmp.pop();
                viewer.play();
            }

            player.getById('resumeGlobalAudios')();
        }

        function onVirtualTourLoaded()
        {
            if(isPaused)
                pauseTour();
        }

        function onVirtualTourEnded()
        {

        }

        function getRootPlayer()
        {
            return window.tdvplayer !== undefined ? window.tdvplayer.getById('rootPlayer') : undefined;
        }

        function setMediaByIndex(index)
        {
            var rootPlayer = getRootPlayer();
            if(rootPlayer !== undefined) {
                return rootPlayer.setMainMediaByIndex(index);
            }
        }

        function setMediaByName(name)
        {
            var rootPlayer = getRootPlayer();
            if(rootPlayer !== undefined) {
                return rootPlayer.setMainMediaByName(name);
            }
        }

        function triggerOverlayByName(item, name, eventName)
        {
            var rootPlayer = getRootPlayer();
            if(rootPlayer !== undefined) {
                item.bind('begin', function(e){
                    item.unbind('begin', arguments.callee, this);
                    var overlay = rootPlayer.getPanoramaOverlayByName(item.get('media'), name);
                    if(overlay)
                        rootPlayer.triggerOverlay(overlay, eventName);
                }, rootPlayer);
            }
        }

        function showPreloader()
        {
            var preloadContainer = document.getElementById('preloadContainer');
            if(preloadContainer != undefined)
                preloadContainer.style.opacity = 1;
        }

        function disposePreloader()
        {
            var preloadContainer = document.getElementById('preloadContainer');
            if(preloadContainer == undefined)
                return;

            var transitionEndName = transitionEndEventName();
            if(transitionEndName)
            {
                preloadContainer.addEventListener(transitionEndName, hide, false);
                preloadContainer.style.opacity = 0;
                setTimeout(hide, 500); //Force hide. Some cases the transitionend event isn't dispatched with an iFrame.
            }
            else
            {
                hide();
            }

            function hide()
            {
                
                preloadContainer.style.visibility = 'hidden';
                preloadContainer.style.display = 'none';
            }

            function transitionEndEventName () {
                var el = document.createElement('div');
                var transitions = {
                        'transition':'transitionend',
                        'OTransition':'otransitionend',
                        'MozTransition':'transitionend',
                        'WebkitTransition':'webkitTransitionEnd'
                    };

                var t;
                for (t in transitions) {
                    if (el.style[t] !== undefined) {
                        return transitions[t];
                    }
                }

                return undefined;
            }
        }

        function onBodyClick(){
            document.body.removeEventListener("click", onBodyClick);
            document.body.removeEventListener("touchend", onBodyClick);
            loadTour();
        }

        function onLoad() {
            if (/AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent))
            {
                var inIFrame = false;
                try
                {
                    inIFrame = (window.self !== window.top);
                }
                catch (e)
                {
                    inIFrame = true;
                }
                if (!inIFrame)
                {
                    var onResize = function(async)
                    {
                        [0, 250, 1000, 2000].forEach(function(delay)
                        {
                            setTimeout(function()
                            {
                                var viewer = document.querySelector('#viewer');
                                var scale = window.innerWidth / document.documentElement.clientWidth;
                                var width = document.documentElement.clientWidth;
                                var height = Math.round(window.innerHeight / scale);
                                viewer.style.width = width + 'px';
                                viewer.style.height = height + 'px';
                                viewer.style.left = Math.round((window.innerWidth - width) * 0.5) + 'px';
                                viewer.style.top = Math.round((window.innerHeight - height) * 0.5) + 'px';
                                viewer.style.transform = 'scale(' + scale + ', ' + scale + ')';
                                window.scrollTo(0,0);
                            }, delay);
                        });
                    };
                    window.addEventListener('resize', onResize);
                    onResize();
                }
            }


            if (isOVRWeb()){
                showPreloader();
                loadTour();
                return;
            }

            showPreloader();
loadTour()
        }

        function playVideo(video) {
            function isSafariDesktopV11orGreater() {
                return /^((?!chrome|android|crios|ipad|iphone).)*safari/i.test(navigator.userAgent) && parseFloat(/Version\/([0-9]+\.[0-9]+)/i.exec(navigator.userAgent)[1]) >= 11;
            }

            function detectUserAction() {
                var onVideoClick = function(e) {
                    if(video.paused) {
                        video.play();
                    }
                    video.muted = false;
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    e.preventDefault();
                    video.removeEventListener('click', onVideoClick);
                    video.removeEventListener('touchend', onVideoClick);
                };
                video.addEventListener("click", onVideoClick);
                video.addEventListener("touchend", onVideoClick);
            }

            if (isSafariDesktopV11orGreater()) {
                video.muted = true;
                video.play();
            } else {
                var canPlay = true;
                var promise = video.play();
                if (promise) {
                    promise.catch(function() {
                        video.muted = true;
                        video.play();
                        detectUserAction();
                    });
                } else {
                    canPlay = false;
                }

                if (!canPlay || video.muted) {
                    detectUserAction();
                }
            }
        }

        function isOVRWeb(){
            return window.location.hash.substring(1).split('&').indexOf('ovrweb') > -1;
        }
    </script>
    <style type="text/css">
        html, body { width: 100%; height: 100%; margin: 0; padding: 0; padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left); }

        #viewer { background-color: #000000; z-index:1; position:absolute; width: 100%; height: 100%; top: 0; }
        #preloadContainer { z-index:2; position:relative; width:100%; height:100%; transition: opacity 0.5s; -webkit-transition: opacity 0.5s; -moz-transition: opacity 0.5s; -o-transition: opacity 0.5s;}
    </style>
    <link rel="stylesheet" href="fonts.css?v=1706518917748">
</head>
<body onload="onLoad()">
    <div id="preloadContainer" style="background-color:rgba(255,255,255,1)"><div style="z-index: 4; position: absolute; left: 0%; top: 50%; width: 100.00%; height: 10.00%"><div style="text-align:left; color:#000; "><DIV STYLE="text-align:center;"><SPAN STYLE="letter-spacing:0vmin;color:#777777;font-size:1.47vmin;font-family:Arial, Helvetica, sans-serif;">Loading virtual tour. Please wait...</SPAN></DIV><p STYLE="margin:0; line-height:1.13vmin;"><BR STYLE="letter-spacing:0vmin;color:#888888;font-size:1.13vmin;font-family:'Segoe UI';"/></p></div></div></div>
    <div id="viewer"></div>
</body>
</html>