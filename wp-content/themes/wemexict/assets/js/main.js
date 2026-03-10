jQuery(document).ready(function ($) {
    console.log("Wemex ICT theme loaded.");
    /** General
  *** Variables
    */

    var originalNotRandomSequence = [0.5113889861814769,0.28013374956758996,0.34822280540897,0.7414197490404126,0.26838882284549026,0.7765078841217332,0.8027785196877393,0.024008637961226542,0.5459573568736276,0.3064323382362615,0.1557274919107814,0.38866377380478334,0.3315486983683209,0.6635796569741559,0.8922195552891417,0.45980527635618884,0.14453729468620113,0.777012775826381,0.23696695233870613,0.310721601258797,0.42817629815250347,0.45372621258311274,0.6278605130517798,0.5824987001303243,0.2738137784133974,0.07159742774517808,0.5280505211028901,0.5551945098469881,0.5553507242077005,0.4356904549115779,0.4346080491670108,0.24650588622912828,0.0800079424556499,0.7498957610684613,0.12147148912999572,0.9095714428551007,0.5655577662572775,0.49114227558758095,0.9141805206676168,0.552721155231366,0.7740838086810333,0.5650796722553888,0.6332721657188392,0.45282664958264474,0.10591051491603376,0.0075033200465222105,0.6249011182495052,0.18314679755851815,0.4978943832346192,0.2266843819877591,0.01505795431701129,0.3086610393827296,0.8347743271976722,0.08001274559563609,0.36290152239791906,0.3725534788157199,0.8375568193490142,0.11099178593579495,0.09888825720408168,0.09964646246797426,0.029284719228428235,0.22541250627903509,0.7461704620192091,0.9127575277849129,0.2489034179827745,0.48485632708928983,0.6089457088461732,0.5356710473381119,0.31652596768561136,0.45443805141261606,0.7502809638457295,0.7090525635290312,0.6154713519384598,0.7167595175385968,0.4911276508511624,0.43583269665732605,0.9467788787008058,0.6016657389484994,0.13184825035232905,0.5703408912659933,0.36925684533860337,0.7067450845699537,0.6430312762811685,0.3025560812181194,0.7208803079011714,0.1865030351348158,0.13549610488304542,0.40695397800177036,0.8224879019240474,0.6223831353498697,0.2249973361674289,0.19197971741990383,0.8828751941780855,0.8103368414228627,0.41820636693162716,0.5328227486951305,0.6390580241309163,0.015269417357525183,0.513283030637756,0.22170123099771644,0.8958063567772592,0.30565769396527354,0.13435835066979362,0.10299855005894876,0.2883278662131161,0.2761499980118456,0.38906901184986764,0.5307080312480481,0.028565631753937337,0.9346836133832148,0.6775200690153698,0.8090193929044494,0.37013020956324927,0.5715358273798443,0.932700173154219,0.8211133101160144,0.011706738758470836,0.7200723181550583,0.4704178286566383,0.7387730465775324,0.6318606606447135,0.9914316987558156,0.5324222837863644,0.6336431315666085,0.7561343814753396,0.35978129494284783,0.798133292167434,0.6730905405468302,0.0978070593849496,0.8735369941679154,0.5867480414972392,0.5699758345668553,0.8889534344462011,0.2741011624763918,0.33525001277245203,0.7857431000446966,0.8020037792827333,0.02698958042062638,0.4619027066654553,0.3840681400724375,0.6046426960471962,0.25153168709864904,0.2173463017858306,0.3950281231096495,0.32685995156066827,0.34685557255231214,0.1588745283854338,0.19637063245117847,0.7479313190874062,0.3036613168693305,0.7026237552555388,0.7354700873331879,0.7791106444404821,0.129564804081568,0.43721777652729843,0.2556992842347423,0.7701862955927474,0.7906751996899664,0.04549396266182848,0.9672529950353954,0.3822159310220987,0.829857261016165,0.48633298704483807,0.12775713590453375,0.25675417369059983,0.019485878734737394,0.6797674797758013,0.4436992236554429,0.8302824548999554,0.2843056832556581,0.425657146004071,0.3041266696030853,0.6070365581150323,0.7149767138568854,0.37176817062241185,0.46111388420012456,0.7925395834108042,0.45533106125479006,0.6067079478564581,0.11772989569426762,0.2398867272345937,0.2316601388242321,0.45085554816686146,0.17916803339994725,0.8318229365482237,0.36831303285375006,0.10200829089245778,0.4816795881407374,0.14099362738935906,0.07112435129677253,0.8832853828571008,0.5541974326495238,0.533770660111544,0.9646865071542894,0.9975447063619096,0.8070723746039441,0.5163933885944458,0.11262778494546821,0.9730370501052863,0.15210053475610996,0.33286005764743476,0.16129044934532866,0.3700162334232133,0.04428940855269925,0.6056842575232779,0.014241764317391992,0.3480302997405247,0.5090994652885026,0.4267038956473843,0.15999099966845853,0.25895941607146256,0.14382997826804678,0.7530868827950499,0.16005561355509057,0.3587655666839398,0.853356201821698,0.35749505188330044,0.5315289543419659,0.07996318113622003,0.34410140127413147,0.017503056712049325,0.19512753823049378,0.7305248447433115,0.2327808967812639,0.7344489379623997,0.0412982166773892,0.43917414871192495,0.33210255949896106,0.15510285034153126,0.7873863853208183,0.432268679403331,0.4506845271013329,0.46138792290853203,0.2596121165124239,0.29097908646136617,0.9309202313173135,0.5759170312709148,0.486987949153481,0.8888939676299652,0.8572585900850755,0.6472774284341645,0.9931201343344325,0.21807735243988513,0.9797640085439614,0.8095744858766949,0.5179515709350395,0.002549206603434717,0.9438331674903608,0.4479808228038269,0.17126937625628513,0.2679468532707492,0.20276896500030528,0.866947968725003,0.7374784140046304,0.6326660815638601,0.18534504521785267,0.1821369124809462,0.2950717557024658,0.8353519071551512,0.46554397488558563,0.8784635374737584,0.02594906902923566,0.7536692799593452,0.445296492271958,0.5916211784254979,0.07886492588023675,0.6488629753578312,0.3578413621011922,0.9236643397992268,0.41203854912096105,0.748995450646301,0.928275135997715,0.7635811052305006,0.5248907397150855,0.3015048541319545,0.9481894046998505,0.15851290106357907,0.2714763429682099,0.9111284636104953,0.16676348771144323,0.28346878808176856,0.729257088417943,0.3126489679130262,0.5256499555723577,0.7436017285908187,0.3528317672305725,0.8878142867620087,0.15009720598842513,0.4351023036464807,0.9227537686086558,0.622051609865236,0.6493780413780674,0.6614764408841161,0.7803156118204875,0.7329562703224921,0.8882908369541773,0.14247840491106123,0.19638514022581188,0.4956931364041055,0.05051282062365159];
    var notRandomSequence = [];
    function getRandomValue() {
        if(notRandomSequence.length === 0) {
            notRandomSequence.push(...originalNotRandomSequence)
        }
        return notRandomSequence.splice(0,1);
    }
    var touch = (/(iphone|ipod|ipad|android|iemobile|blackberry|bada)/.test(window.navigator.userAgent.toLowerCase()))
    var ua = window.navigator.userAgent
    var IEorEdge = (function () {
        var result = 0
        var matches = [
            ['MSIE '],
            ['Trident/', 'rv:'],
            ['Edge/']
        ]
        for (var i = 0; i < matches.length; i++) {
            var str = matches[i][0]
            var match = ua.indexOf(str)
            if (match !== -1) {
                if (matches[i].length > 1) {
                    str = matches[i][1]
                    match = ua.indexOf(str)
                }
                var from = match + str.length
                result = parseInt(ua.substring(from, ua.indexOf('.', from)), 10)
                break
            }
        }
        return result
    })()
    var gridSupport = (IEorEdge && IEorEdge < 12 ? false : CSS.supports('display', 'grid'))
    var $doc    = $(document)
    var docHeight
    var $win    = $(window)
    var winHeight
    var $html   = $('html')
    var $head   = $('head')
    var $body   = $('body').addClass('js' + (touch ? ' touch' : '') + (gridSupport ? ' gridSupport' : '') + (IEorEdge ? (IEorEdge < 12 ? ' IE' : ' Edge') + ' IEdge' : ''))
    var $header = $('header.main')
    var $nav    = $('nav.main')
    var $main   = $('main.main')
    var $footer = $('footer.main')

    /** Functions
    */
    function uuid(a,b){for(b=a='';a++<36;b+=~a%5|a*3&4?(a^15?8^getRandomValue()*(a^20?16:4):4).toString(16):'-');return b}

    function shuffle(a,b,c,d){c=a.length;while(c)b=getRandomValue()*c--|0,d=a[c],a[c]=a[b],a[b]=d}

    Object.size = function (obj) {
        var size = 0
        for (var key in obj) if (obj.hasOwnProperty(key)) size++
        return size
    }

    function set (t, str) {
        if (t instanceof jQuery || t.constructor.prototype.jquery) $this = t
        else $this = $(t)
        if (str) $parent = $this.parents(str).eq(0)
        else $parent = undefined
    }

    function ucfirst (str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    var is = {
        undef: function (e) {
            if (typeof e === 'undefined') return true
            return false
        },
        str: function (e) {
            if (typeof e === 'string') return true
            return false
        },
        int: function (e) {
            if (typeof e === 'number') return true
            return false
        },
        array: function (e) {
            if (Array.isArray(e)) return true
            return false
        },
        obj: function (e) {
            if (typeof e === 'object') return true
            return false
        },
        func: function (e) {
            if (e instanceof Function) return true
            return false
        },
        html: function (e) {
            if (is.obj(e) && e.nodeType) return true
            return false
        },
        jQuery: function (e) {
            if (is.obj(e) && (e instanceof jQuery || e.constructor.prototype.jquery)) return true
            return false
        }
    }

    function reflow (el) {
        void ((is.undef(el) ? document.documentElement : is.jQuery(el) ? el[0] : el).offsetHeight)
        return el
    }

    $.fn.scrollStopped = function (callback) {
        var $this = $(this)
        $this.scroll(function (e) {
            clearTimeout($this.data('scrollTimeout'))
            $this.data('scrollTimeout', setTimeout(callback.bind(this), 150, e))
        }.bind(this))
    }

    $.fn.resizeStopped = function (callback) {
        var $this = $(this)
        $this.resize(function (e) {
            clearTimeout($this.data('resizeTimeout'))
            $this.data('resizeTimeout', setTimeout(callback.bind(this), 300, e))
        }.bind(this))
    }

    /** Polyfills
  */
    if (!String.prototype.padStart) {
        String.prototype.padStart = function padStart (targetLength, padString) {
            targetLength = targetLength >> 0
            padString = String((typeof padString !== 'undefined' ? padString : ' '))
            if (this.length > targetLength) {
                return String(this)
            } else {
                targetLength = targetLength - this.length
                if (targetLength > padString.length) padString += padString.repeat(targetLength / padString.length)
                return padString.slice(0, targetLength) + String(this)
            }
        }
    }

    /** Resize listener
  */
    ;(function () {
        var attachEvent = document.attachEvent
        var isIE = navigator.userAgent.match(/Trident/)
        var requestFrame = (function () {
            var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (fn) { return window.setTimeout(fn, 20) }
            return function (fn) { return raf(fn) }
        })()

        var cancelFrame = (function () {
            var cancel = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout
            return function (id) { return cancel(id) }
        })()

        function resizeListener (e) {
            var win = e.target || e.srcElement
            if (win.__resizeRAF__) cancelFrame(win.__resizeRAF__)
            win.__resizeRAF__ = requestFrame(function () {
                var trigger = win.__resizeTrigger__
                trigger.__resizeListeners__.forEach(function (fn) {
                    fn.call(trigger, e)
                })
            })
        }

        function objectLoad (e) {
            this.contentDocument.defaultView.__resizeTrigger__ = this.__resizeElement__
            this.contentDocument.defaultView.addEventListener('resize', resizeListener)
        }

        window.addResizeListener = function (element, fn) {
            if (!element.__resizeListeners__) {
                element.__resizeListeners__ = []
                if (attachEvent) {
                    element.__resizeTrigger__ = element
                    element.attachEvent('onresize', resizeListener)
                }
                else {
                    if (getComputedStyle(element).position == 'static') element.style.position = 'relative'
                    var obj = element.__resizeTrigger__ = document.createElement('object');
                    obj.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;')
                    obj.__resizeElement__ = element
                    obj.onload = objectLoad
                    obj.type = 'text/html'
                    if (isIE) element.appendChild(obj)
                    obj.data = 'about:blank'
                    if (!isIE) element.appendChild(obj)
                }
            }
            element.__resizeListeners__.push(fn)
        }

        window.removeResizeListener = function (element, fn) {
            element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1)
            if (!element.__resizeListeners__.length) {
                if (attachEvent) element.detachEvent('onresize', resizeListener)
                else {
                    element.__resizeTrigger__.contentDocument.defaultView.removeEventListener('resize', resizeListener)
                    element.__resizeTrigger__ = !element.removeChild(element.__resizeTrigger__)
                }
            }
        }
    })()

    $(function () {
        /** Responsive header
    */
        var $logo = $nav.children('.logo')
        function setPadding () {
            var $style = $('style.responsive')
            var string = '<style class="responsive">[pathname]>:first-child{padding-top:' + $logo.outerHeight() + 'px!important}</style>'
            if ($style.length) $style.replaceWith(string)
            else                     $head.append(string)
        }
        setPadding()
        addResizeListener($logo[0], setPadding)

        /** Alert
    */
        var a = (function () {
            var standard = {
                type: 'error', /* Standard types include 'error' and 'success' */
                header: 'Oeps...', /* Text only */
                main: 'Er is iets fout gegaan.' /* Text or HTML */
            }
            var transitions = {
                in: 300,
                out: 225,
                delay: 50
            }
            var $alert  = $('#alert')
            var $header = $alert.children('header')
            var $main   = $alert.children('main')
            var $footer = $alert.children('footer')
            var queue   = []
            var timeout
            function shift () {
                clearTimeout(timeout)
                $alert.removeClass('active')
                $footer.off('click')
                queue.shift()
                if (queue.length) {
                    setTimeout(function () {
                        pop()
                    }, (transitions.out || 0) + (transitions.delay || 0))
                }
            }
            function pop () {
                var data = queue[0]
                $alert.removeClass().addClass(data.type || standard.type)
                $header.text(data.header || standard.header)
                $main.html(data.main || standard.main)
                var callbacks = data.callbacks
                if (callbacks) {
                    var html = ''
                    for (var callback in callbacks) html += '<div class="ui button blue" callback="' + callback + '">' + (callbacks[callback].text || ucfirst(callback)) + '</div>'
                    $footer.html(html).one('click', '.button', function () {
                        var obj = callbacks[$(this).attr('callback')]
                        if (is.func(obj)) obj()
                        else if (obj.func) obj.func()
                        shift()
                    }).addClass('active')
                } else {
                    $footer.removeClass('active').empty()
                    timeout = setTimeout(function () {
                        shift()
                    }, (transitions.in || 0) + 750 + $main.text().split(' ').length * 250)
                }
                $alert.addClass('active')
            }
            $doc.on('click', '#alert .close', function () { shift() })

            return {
                lert: function (data) {
                    if (is.str(data)) data = {main: data}
                    queue.push(data || {})
                    if (queue.length === 1) pop()
                }
            }
        })()

        /** Navigation
    */
        function getBGClass (str) {
            var arr = str.split(' ')
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].substr(0, 3) === 'bg-') {
                    return arr[i]
                }
            }
        }

        var nav = (function () {
            var busy
            var container  = $main
            var $el        = container.children()
            var $hamburger = $nav.children('.hamburger')
            var $ul        = $nav.children('ul')
            var href       = $el.attr('pathname')
            var rootPage   = $el.attr('pathtype') === 'root' ? href : null
            var titles     = {}
            var colors     = {}
            titles[href]   = document.title
            colors[href]   = {header_background: getBGClass($nav.attr('class')), footer_background: getBGClass($footer.attr('class'))}
            history.replaceState({href: rootPage ? '' : href}, '', rootPage ? '' : href)

            var instagram  = false
            function checkInstagram ($el, newEl) {
                var $instagram = $el.find('.instagram')
                if ($instagram.length) {
                    if (newEl) $instagram.each(function () { addResizeListener(this, function () { parallax(true) }) })
                    if (instagram) {
                        window.instgrm.Embeds.process()
                    } else {
                        instagram = true
                        $.getScript('//platform.instagram.com/en_US/embeds.js')
                    }
                }
            }
            checkInstagram($el, true)

            function toggleMenu (to) {
               /* window.scrollTo(0, 0) */
                if (is.undef(to)) $html.toggleClass('mobileNav')
                else {
                    if ($html.hasClass('mobileNav') === to) return
                    if (to) $html.addClass('mobileNav')
                    else $html.removeClass('mobileNav')
                }
                if ($html.hasClass('mobileNav')) {
                    $ul.on('transitionend.clip', function () {
                        $ul.addClass('forceClip')
                    }).addClass('active')
                } else {
                    reflow($ul.off('transitionend.clip').removeClass('forceClip'))
                    $ul.removeClass('active')
                }
            }

            function parse (p) {
                if (is.str(p)) p = {href: p}
                p.href = p.href.replace(/^\/|\/$/g, '')
                if (p.href === '' && rootPage) p.href = rootPage
                p.$el = container.children('[pathname="' + p.href   + '"]')
                if (p.$el && p.$el.length) {
                    if (!p.$el.hasClass('inActive')) return
                    if (p.action === 'refresh' || p.$el.hasClass('refresh')) ajax(p)
                    else                                                 setState(p)
                } else                                                     ajax(p)
            }

            function ajax (p) {
                busy = true
                $.ajax({
                    url: 'ajax/' + p.href,
                    dataType: 'json',
                    success: function (response) {
                        p.response = response
                        setState(p)
                    },
                    error: function (request) {
                        p.response = request.responseText
                        p.error = true
                        setState(p)
                    }
                })
            }

            function setState (p) {
                if (p.error) {
                    a.lert('Er ging iets fout bij het ophalen van de pagina.')
                } else {
                    if (p.response) {
                        p.title = p.response.title
                        p.color = p.response.page.attr ? p.response.page.attr : {header_background: 'bg-matte', footer_background: 'bg-matte'}
                        p.html  = p.response.html
                        delete(p.response)
                    } else {
                        p.title = titles[p.href]
                        p.color = colors[p.href]
                    }
                    requestAnimationFrame(function () {
                        window.scrollTo(0, 0)
                        if (p.html) {
                            container.children().addClass('inActive').end().append(p.html)
                            p.$el.remove()
                            p.$el = container.children(':not(.inActive)')
                        } else {
                            p.$el.removeClass('inActive').siblings().addClass('inActive')
                        }
                        if (p.href === '') {
                            if (rootPage) p.href = rootPage
                            else p.href = rootPage = p.$el.attr('pathname')
                        }
                        if (p.html) {
                            titles[p.href] = p.title
                            colors[p.href] = p.color
                        }
                        checkInstagram(p.$el, !!p.html)
                        if (p.action !== 'refresh' && p.action !== 'pop') history.pushState({href: p.href}, '', p.href)
                        $nav.find('li').removeClass('active').has('> a[href="/' + p.href + '"], ' + (p.root ? '> a[href="/"]' : '> a[href="/' + p.href.split('/')[0] + '"]')).addClass('active')
                        document.title = titles[p.href]
                        $nav.removeClass(function (index, className) { return (className.match (/(^|\s)bg-\S+/g) || []).join(' ') }).addClass(p.color.header_background)
                        $footer.removeClass(function (index, className) { return (className.match (/(^|\s)bg-\S+/g) || []).join(' ') }).addClass(p.color.footer_background)
                        if (p.callbacks) {
                            if (p.callbacks.all)                     p.callbacks.all()
                            if (p.callbacks.success    &&  p.status) p.callbacks.success()
                            else if (p.callbacks.error && !p.status) p.callbacks.error()
                        }
                        var $grids = $('.grid.random:not(.generated)')
                        $grids.each(function () {
                            set(this)
                            grid.apply($this, grid.generate($this.children().length))
                        })
                        reflow()
                        parallax()
                        toggleMenu(false)
                        ga('send', 'pageview', p.href)
                    })
                }
                busy = false
            }

            $doc.on('click', 'a', function (e) {
                set(this)
                var href = $this.attr('href')
                if (href.charAt(0) === '/' && !href.test(/\.\d{2,}$/)) {
                    e.preventDefault()
                    if (!busy) {
                        $hamburger.removeClass('active')
                        parse(href)
                    }
                }
            })

            $hamburger.on('click', function () { toggleMenu() })

            $win.on('popstate', function () { parse({href: history.state.href, action: 'pop'}) })

            var size = 0
            function circleCalculation (force) {
                var newSize = Math.sqrt(Math.pow($win.innerWidth() - parseInt($hamburger.css('padding-right')) - 15, 2) + Math.pow($win.innerHeight() - parseInt($hamburger.css('padding-top')) * 1.5, 2))
                if (force || newSize > size) $ul[0].style.setProperty('--diagonal', size = newSize + 'px')
            }
            $win.resize(function () { circleCalculation() }).resizeStopped(function () { circleCalculation(true) })
            circleCalculation()
			
			/*/ auto close menu onclick menu item with '#' /*/
			document.querySelectorAll('#menu-hoofdmenu a').forEach(link => {
					link.addEventListener('click', function(event) {
					
					const href = this.getAttribute('href');
					const hash = href.includes('#') ? href.split('#')[1] : null;
			
					if (hash) {
						
						
						toggleMenu(false);
						
						const target = document.getElementById(hash);
						if (target) {
							target.scrollIntoView({
								behavior: 'smooth',
								block: 'start'
							});
						}
					}
				});
			});


            return {
                container: container,
                parse: parse
            }
        })()

        /** Parallax
    */
        var parallax = (function () {
            var $scroller = $('#scroller')
            var $parallax
            var scrolling
            var allowedTranslations = ['x', 'y', 'z']

            ;(function () {
                function watchBody () {
                    var newHeight = $scroller.outerHeight(true)
                    if (newHeight !== docHeight) {
                        docHeight = newHeight
                        $body.css('height', newHeight)
                    }
                    requestAnimationFrame(watchBody)
                }
                // if (!touch) requestAnimationFrame(watchBody)
            })()

            window.parallaxCache = []
            var flags = {}
            var scrollY
            function animate (once) {
                scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
                // if (!touch) $scroller.css('top', '-' + scrollY + 'px')
                $scroller.css('top', '-' + scrollY + 'px')
                if (parallaxCache.length) {
                    var index = 0
                    for (var u = 0; u < parallaxCache.length; u++) {
                        index++
                        var p = parallaxCache[u]
                        if ((p.from < scrollY && p.to > scrollY) || flags[u]) {
                            var distance
                            for (var _type in p.types) {
                                var obj = p.types[_type]
                                switch (_type) {
                                    case 'move':
                                        for (var e = 0; e < obj.elements.length; e++) {
                                            var translate = ''
                                            for (var o = 0; o < allowedTranslations.length; o++) {
                                                var a = allowedTranslations[o]
                                                var thisSpeed = obj.speed[e][a]
                                                if (thisSpeed) {
                                                    distance = (p.offset - scrollY + p.height / 2 - winHeight / 2) / (p.height / 2 + winHeight / 2) + (p.overflow || 0)
                                                    var value
                                                    if (thisSpeed.type === 'px') {
                                                        value = Math.round(thisSpeed.int * distance * 2) / 2
                                                    } else if (thisSpeed.type === 'vh' || thisSpeed.type === 'vw' || thisSpeed.type === 'vmin' || thisSpeed.type === 'vmax') {
                                                        value = Math.round(thisSpeed.int * distance * 100) / 100
                                                    } else {
                                                        value = Math.round(thisSpeed.int * distance * 10) / 10
                                                    }
                                                    translate += 'translate' + a.toUpperCase() + '(' + value + thisSpeed.type + ')'
                                                }
                                            }
                                            obj.elements.eq(e).css('transform', translate)
                                        }
                                        break
                                        case 'mediaScroller':
                                        var activeImage = obj.length - 1
                                        var scrollerTransform
                                        var containerTransform
                                        distance = (p.offset - scrollY + p.height / 2 - winHeight / 2) / (p.height / 2 - winHeight / 2) + (p.overflow || 0)
                                        if (distance < -1 || distance > 1) {
                                            flags[u] = false
                                            if (distance > 1) activeImage = 0
                                            scrollerTransform  = (distance <= -1 ? 'translate3d(0,' + (obj.length * 200) + 'px,0)' : 'none')
                                            containerTransform = 'translate3d(0,' + (distance <= -1 ? '-' : '') + '100px,0)'
                                        } else {
                                            flags[u] = true
                                            activeImage -= (Math.ceil(((distance * .5) + .5) * obj.length) || 1) - 1
                                            scrollerTransform  = 'translate3d(0,' + (scrollY - p.offset) + 'px,0)'
                                            containerTransform = 'translate3d(0,' + (distance * 100)     + 'px,0)'
                                        }
                                        obj.scroller.css({'background-image': 'url(\'' + obj.images[activeImage] + '\')', 'transform': scrollerTransform})
                                        obj.container.css('transform', containerTransform)
                                        break
                                        case 'bg-scale':
                                        default:
                                        distance = (p.offset - scrollY + p.height / 2 - winHeight / 2) / (p.height / 2 + winHeight / 2) + (p.overflow || 0)
                                        obj.$this.css('background-position', '50% ' + ((distance * 50) + 50) + '%')
                                }
                            }
                        }
                    }
                }
                if (!once && scrolling) requestAnimationFrame(function () { animate() })
            }

            function getSpeed () {
                var data = $(this).data()
                var speed = {}
                for (var i = 0; i < allowedTranslations.length; i++) {
                    var u = allowedTranslations[i]
                    var rawData = data['parallaxSpeed' + u.toUpperCase()]
                    if (rawData) {
                        var thisSpeed = {}
                        if (is.int(rawData)) {
                            thisSpeed.int = rawData
                            thisSpeed.type = 'px'
                        } else {
                            thisSpeed.int = parseInt(rawData)
                            thisSpeed.type = rawData.substr(thisSpeed.int.toString().length)
                        }
                        speed[u] = thisSpeed
                    }
                }
                return speed
            }

            function recalc (resize) {
                var newHeight = $scroller.outerHeight(true)
                if (newHeight !== docHeight) {
                    docHeight = newHeight
                    $body.css('height', newHeight)
                }
                winHeight = window.innerHeight

                if (!resize) $parallax = nav.container.children(':not(.inActive)').find('[data-parallax]')
                if ($parallax) {
                    reflow()
                    parallaxCache = []
                    $parallax.each(function () {
                        var $this = $(this)
                        var p = $this.data('p')
                        if (!p || !resize) {
                            var data = $this.data()
                            var types = data.parallax.split(',')
                            p = {
                                $this:  $this,
                                types:  {},
                                anchor: data.parallaxAnchor
                            }
                            for (var i = 0; i < types.length; i++) {
                                var _type = types[i]
                                var obj = {}
                                switch (_type) {
                                    case 'move':
                                        obj.elements = $this.find('[data-parallax-speed-' + allowedTranslations.join('], [data-parallax-speed-') + ']')
                                        obj.speed = obj.elements.map(getSpeed).get()
                                        break
                                        case 'mediaScroller':
                                        obj.images = data.parallaxBackgrounds.split(',').map(function (item) { return item.trim() })
                                        obj.length = obj.images.length
                                        obj.scroller = $this.children('.scroller')
                                        obj.container = obj.scroller.children('.container')
                                        $this.css('height', 'calc(100vh + ' + obj.length * 200 + 'px)')
                                        break
                                        case 'bg-scale':
                                        default:
                                }
                                p.types[_type] = obj
                            }
                        }
                        scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
                        reflow($scroller.css('top', '-' + scrollY + 'px'))
                        p.offset = $this.offset().top
                        p.height = reflow($this).outerHeight()
                        p.from   = p.offset - winHeight
                        p.to     = p.offset + p.height
                        if (p.anchor) {
                            var maxScroll = Math.round(docHeight - winHeight)
                            if ((p.from < 0 !== p.to > maxScroll) && (p.offset > maxScroll)) {
                                if (p.from < 0) {
                                    p.to += p.from
                                    p.from = 0
                                } else {
                                    p.from -= (p.to - maxScroll)
                                    p.to = maxScroll
                                }
                                p.overflow = 0 - (p.offset - (p.from < 0 ? 0 : maxScroll) + p.height / 2 - winHeight / 2) / (p.height / 2 + winHeight / 2)
                            }
                        }
                        parallaxCache.push(p)
                        $this.data('p', p)
                    })
                    if (!scrolling) requestAnimationFrame(function () { animate(true) })
                }
            }

            var scrolled
            var resizeTimeout
            $win.resize(function () {
                clearTimeout(resizeTimeout)
                resizeTimeout = setTimeout(function () {
                    requestAnimationFrame(function () {
                        recalc(true)
                    })
                }, 150)
            }).scroll(function () {
                if (!scrolled) {
                    scrolled = true
                    $body.addClass('scrolled')
                }
                if (!scrolling) {
                    scrolling = true
                    requestAnimationFrame(function () { animate() })
                }
            }).scrollStopped(function () {
                scrolling = false
            })

            requestAnimationFrame(function () {
                recalc()
            })

            return recalc
        })()

        /** UI Elements
    */
        var whitelist = [8, 9, 13, 37, 38, 39, 40, 46] // backspace, tab, enter, arrow keys (37 - 40), delete
        $doc.on('focus', '[contenteditable]', function () {
            set(this, '.number')
        }).on('keypress', '[contenteditable]', function (e) {
            // keypress is also triggered in Firefox when pressing tab, insert, delete, etc.
            var which = e.which
            if (whitelist.indexOf(e.keyCode) === -1 && $parent.length && !new RegExp('[0-9' + ($parent.hasClass('decimal') ? '.' : '') + ']').test(String.fromCharCode(which)) && !e.ctrlKey) e.preventDefault()
        }).on('paste drop', '[contenteditable]', function (e) {
            e.preventDefault()
            set(this, '.number')
            var oldText = $this.text()
            var newText = e.originalEvent[e.type === 'paste' ? 'clipboardData' : 'dataTransfer'].getData('text/plain')
            if (!$parent.length || $parent.length && !(/[^0-9.]/.test(newText) || newText.split('.').length - 1 + ((e.type === 'paste' ? oldText.replace(selection(), '') : oldText).indexOf('.') !== -1 ? 1 : 0) > ($parent.hasClass('decimal') ? 1 : 0))) document.execCommand('insertText', false, newText)
        }).on('input', '[contenteditable]', function () {
            if ($this.text() === '') $this.empty()
            else if ($this.parents('.ui').hasClass('error')) $this.parents('.ui').removeClass('error')
        })

        $doc.on('click', '.sendForm', function () {
            if (busy !== true) {
                busy = true
                set(this, 'form')
                var data = {
                    module_id: $parent.attr('module_id')
                }
                var $inputs = $parent.find('.ui.input')
                var error = false
                for (var i = 0; i < $inputs.length; i++) {
                    var $input = $inputs.eq(i)
                    var $error = $input.siblings('.errorMessage')
                    var name   = $input.attr('name')
                    var value  = $input.find('[contenteditable]')[0].innerText
                    if (value === '') {
                        error = true
                        regrow({
                            type: 'all',
                            $this: function $this() {
                                return $error.text('Dit veld moet nog ingevuld worden.').addClass('visible active')
                            },
                            $parent: $error.parent(),
                            end: 'animation'
                        })
                    } else if (/email/.test(name) && !/^.+\@\S+\.\S+$/.test(value)) {
                        error = true
                        regrow({
                            type: 'all',
                            $this: function $this() {
                                return $error.text('Dit e-mailadres is ongeldig').addClass('visible active')
                            },
                            $parent: $error.parent(),
                            end: 'animation'
                        })
                    } else {
                        if ($error.hasClass('active')) {
                            regrow({
                                type: 'siblings',
                                $this: function $this() {
                                    return $error.removeClass('active')
                                },
                                $parent: $error.parent(),
                                end: 'animation'
                            })
                        }
                    }
                    data[name] = value
                }
                if (error !== true) {
                    $.ajax({
                        method: 'POST',
                        url: $parent.attr('action'),
                        data: data,
                        dataType: 'json',
                        success: function success(response, textStatus, request) {
                            $inputs.find('[contenteditable]').empty()
                            a.lert({
                                type: 'success',
                                header: 'Verzonden',
                                main: 'Uw bericht is verzonden!'
                            })
                            busy = false
                        },
                        error: function error(request, textStatus, errorThrown) {
                            a.lert('Er ging iets fout bij het verzenden van het bericht.')
                            busy = false
                        }
                    })
                } else {
                    busy = false
                }
            }
        })

        /** Contact
    */
        $doc.on('click', '[action="sendForm"]', function () {
            var $ui      = $(this).siblings('.uifield').children('.ui')
            var data     = {}
            var allEmpty = true
            var error    = false
            $ui.each(function () {
                set(this)
                var val = $this.children('[contenteditable]')[0].innerText.trim()
                if (val !== '') allEmpty = false
                data[$this.attr('name')] = {
                    $el: $this,
                    $ph: $this.children('[placeholder]'),
                    $ce: $this.children('[contenteditable]'),
                    val: val
                }
            })
            var allEmptyPlaceholders = ['Fill', 'these', 'fields,', 'please']
            var i = 0
            for (name in data) {
                var $el = data[name].$el
                var $ph = data[name].$ph
                var $ce = data[name].$ce
                var val = data[name].val
                if (val === '') {
                    error = true
                    $ph.attr('errorplaceholder', allEmpty ? allEmptyPlaceholders[i++] : 'You need to fill this field')
                    $el.addClass('error')
                } else {
                    if (name === 'email' && !/^.+\@\S{3,}\.\S{2,}$/.test(val)) {
                        error = true
                        $ph.attr('errorplaceholder', 'That email address seems to be invalid :O')
                        $ce.empty()
                        $el.addClass('error')
                    } else if (name === 'msg' && val.length < 20) {
                        error = true
                        $ph.attr('errorplaceholder', 'Don\'t you feel like saying a little more?')
                        $ce.empty()
                        $el.addClass('error')
                    } else {
                        data[name] = val
                    }
                }
            }
            if (!error) {
                $.ajax({
                    url: data.post_url,
                    type: 'POST',
                    data: data,
                    success: function (response) {
                        if (response.type === 'success') {
                            $ui.addClass('disabled')
                            $('[action="sendForm"]').replaceWith('<div class="message">We\'ve received your message!</div>')
                        } else {
                            a.lert({
                                header: 'Something went wrong :/',
                                main: 'We couldn\'t send the message due to a server error. You can try again later.'
                            })
                        }
                    }
                })
            }
        })

        /** Grid generator
    * Dependencies:
    *   uuid()
    *   shuffle()
    *   is
    *     undef()
    * A query's width (config[query].width) should never exceed 32 (I think. Test this)
    * To do:
    *   Kijk of er ruimte is om te schuiven wanneer een blok op een plek geplaatst gaat worden
    *   Of plaats alle blokken gewoon op een willekeurige x-as
    */
        var grid = (function () {
            var config = {
                0: {
                    width: 2,
                    lengths: {
                        min: [1, 1],
                        max: [1, 2]
                    },
                    surface: {
                        min: 1,
                        max: 2
                    }
                },
                578: {
                    width: 3,
                    lengths: {
                        min: [1, 2],
                        max: [2, 2]
                    },
                    surface: {
                        min: 2,
                        max: 4
                    }
                },
                784: {
                    width: 8,
                    lengths: {
                        min: [2, 2],
                        max: [3, 4]
                    },
                    surface: {
                        min: 4,
                        max: 12
                    }
                },
                1002: {
                    width: 10,
                    lengths: {
                        min: [3, 2],
                        max: [4, 5]
                    },
                    surface: {
                        min: 6,
                        max: 15
                    }
                },
                1236: {
                    width: 12,
                    lengths: {
                        min: [3, 3],
                        max: [4, 5]
                    },
                    surface: {
                        min: 9,
                        max: 16
                    }
                },
                1468: {
                    width: 14,
                    lengths: {
                        min: [3, 3],
                        max: [4, 5]
                    },
                    surface: {
                        min: 9,
                        max: 20
                    }
                }
            }
            function generate (items, c) {
                if (is.undef(c)) c = config
                var dataSets = {}
                for (var q in c) {
                    var query = c[q]
                    var data = {
                        grid: [getEmptyRow(query.width)],
                        coords: []
                    }
                    for (var i = 0; i < items; i++) {
                        var item = [0, 0]
                        while (item[0] * item[1] < query.surface.min || item[0] * item[1] > query.surface.max) {
                            for (var j = 2; j--;) item[j] = Math.floor(getRandomValue() * (query.lengths.max[j] - query.lengths.min[j] + 1)) + query.lengths.min[j]
                        }
                        var coords = (i ? generateCoordinates(generateMap(data.grid, item), item) : {
                            width:  item[0],
                            height: item[1],
                            top: 0,
                            left: Math.floor((query.width - item[0] + 1) * getRandomValue())
                        })
                        data = placeItem(data, coords)
                    }
                    dataSets[q] = data
                }
                return dataSets
            }
            function generateMap (grid, item) {
                var mapRow = getEmptyRow(grid[0].length, 1)
                var map = grid.map(function (row) { return row.map(function (value) { return value ? 0 : 1 }) })
                for (var u = 0; u < item[1]; u++) {
                    map.unshift(mapRow)
                    map.push(mapRow)
                }
                if (item[0] - 1) for (var e = 0; e < map.length; e++) map[e] = bitShift(map[e], item[0] - 1)
                map = rotateMatrixCounterClockwise(map)
                if (item[1] - 1) for (var j = 0; j < map.length; j++) map[j] = bitShift(map[j], item[1] - 1)
                map = rotateMatrix(map)
                return map
            }
            function generateCoordinates (map, item) {
                var coords    = {}
                coords.width  = item[0]
                coords.height = item[1]
                coords.top    = getCenteredOneDimensionalCoordinate(
                    map.map(function (value) {
                        return parseInt(value.join(''))
                    }),
                    item[1]
                )
                if (parseInt(map[coords.top].join('')) === 1) {
                    coords.left = map[coords.top].indexOf(1)
                } else {
                    coords.left = getRandomOneDimensionalCoordinate(
                        map[coords.top]
                    )
                }
                coords.top -= item[1]
                return coords
            }
            function getCenteredOneDimensionalCoordinate (arr, width) {
                var start = arr.length / 2 - width / 2
                var match = [-1, -1]
                var pointer = 0
                while (match[0] === -1 && match[1] === -1) {
                    var neg = Math.floor(start) - pointer
                    var pos = Math.ceil( start) + pointer
                    match = [
                        arr[neg] ? neg : -1,
                        arr[pos] ? pos : -1
                    ]
                    pointer++
                }
                return (match[0] === match[1] ? start : match[match[0] === -1 ? 1 : match[1] === -1 ? 0 : Math.round(getRandomValue())])
            }
            function getRandomOneDimensionalCoordinate (arr) {
                var possibilities = []
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i]) possibilities.push(i)
                }
                return possibilities[Math.floor(possibilities.length * getRandomValue())]
            }
            function placeItem (data, coords) {
                var gridRow = getEmptyRow(data.grid[0].length)
                if (coords.top < 0) {
                    for (var e = 0; e < data.coords.length; e++) data.coords[e].top -= coords.top
                    while (coords.top) {
                        data.grid.unshift(gridRow)
                        coords.top++
                    }
                }
                data.coords.push(coords)
                var overflow = coords.top + coords.height - data.grid.length
                if (overflow > 0) {
                    for (var u = 0; u < overflow; u++) {
                        data.grid.push(gridRow)
                    }
                }
                var itemArr = Array.apply(null, Array(coords.width)).map(function () { return data.coords.length })
                for (var o = coords.top; o < coords.top + coords.height; o++) data.grid[o] = data.grid[o].slice(0, coords.left).concat(itemArr).concat(data.grid[o].slice(coords.left + coords.width))
                return data
            }
            function getEmptyRow (length, value) {
                return Array.apply(null, Array(length)).map(function () { return value || 0 })
            }
            function rotateMatrix                 (matrix) { return   flipMatrix(matrix.reverse()) }
            function rotateMatrixCounterClockwise (matrix) { return   flipMatrix(matrix).reverse() }
            function flipMatrixCounterClockwise   (matrix) { return rotateMatrix(matrix).reverse() }
            function flipMatrix                   (matrix) {
                return matrix[0].map(function (col, i) {
                    return matrix.map(function (row) {
                        return row[i]
                    })
                })
            }
            function bitShift (arr, int) {
                var width = arr.length
                if (width > 32) {
                    while (int--) {
                        for (var i = 0; i < width - 1; i++) arr[i] = arr[i] & arr[i + 1]
                        arr[width - 1] = 0
                    }
                    return getEmptyRow(width).concat(arr).slice(-width)
                } else {
                    arr = parseInt(arr.reverse().join(''), 2)
                    while (int--) arr = arr & arr >>> 1
                    return arr.toString(2).padStart(width, '0').split('').map(function(bit) { return parseInt(bit) }).reverse()
                }
            }
            function apply ($this, data) {
                var className = 'grid-' + uuid()
                var styles = '<style>\n'
                var queries = []
                for (var query in data) queries.push(parseInt(query))
                queries.sort(function (a, b) { return b - a })
                for (var i = 0; i < queries.length; i++) {
                    styles += '@media'
                    if (queries[i]) styles += '(min-width:' + (queries[i]) + 'px)' + (i ? ' and ' : '')
                    if (i)          styles += '(max-width:' + (queries[i  - 1] - 1) + 'px)'
                    styles += '{\n'
                    var coords = data[queries[i]].coords
                    var grid   = data[queries[i]].grid
                    var width  = grid[0].length
                    var height = grid.length
                    if (gridSupport) {
                        styles += ' .' + className + '{grid-template-columns:repeat(' + width + ',1fr);grid-template-rows:repeat(' + height + ',var(--row-size,auto))}\n'
                    } else {
                        styles += ' .' + className + '::before{padding-bottom:' + (100 / width * height) + '%}\n'
                    }
                    var order = []
                    for (var o = 0; o < coords.length; o++) order.push(o)
                    shuffle(order)
                    for (var u = 0; u < coords.length; u++) {
                        coord = coords[u]
                        if (gridSupport) {
                            styles += ' .' + className + ' > li:nth-child(' + (order[u] + 1) + ')'
                                +                     '{grid-row-start:'    + (coord.top  + 1)
                                +                     ';grid-column-start:' + (coord.left + 1)
                                + (coord.height > 1 ? ';grid-row-end:'      + (coord.top  + 1 + coord.height) : '')
                                + (coord.width  > 1 ? ';grid-column-end:'   + (coord.left + 1 + coord.width)  : '')
                                + '}\n'
                        } else {
                            var top    = 100 / height * coord.top
                            var left   = 100 / width  * coord.left
                            var right  = 100 / width  * (width  - coord.left - coord.width)
                            var bottom = 100 / height * (height - coord.top  - coord.height)
                            styles += ' .' + className + ' > li:nth-child(' + (order[u] + 1) + '){top:' + (top ? top + '%' : 0) + ';left:' + (left ? left + '%' : 0) + ';right:' + (right ? right + '%' : 0) + ';bottom:' + (bottom ? bottom + '%' : 0) + '}\n'
                        }
                    }
                    styles += '}\n'
                }
                styles += '</style>'
                $head.append(styles)
                $this.addClass(className + ' generated')
            }
            return {
                generate: generate,
                apply: apply
            }
        })()
        var $grids = $('.grid.random:not(.generated)')
        $grids.each(function () {
            $this = $(this)
            grid.apply($this, grid.generate($this.children().length))
        })
    })

    /** Cookie consent
  */
    function processCookieConsent ($isConfirmed) {
        setCookie('cookie_consent', $isConfirmed, 700)
        location.reload()
    }

    function setCookie (cname, cvalue, exdays) {
        var d = new Date()
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
        var expires = 'expires=' + d.toUTCString()
        document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
    }

    function getCookie (cname) {
        var name = cname + '='
        var decodedCookie = decodeURIComponent(document.cookie)
        var ca = decodedCookie.split(';')
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i]
            while (c.charAt(0)     === ' ') {    c = c.substring(1) }
            if    (c.indexOf(name) === 0)   { return c.substring(name.length, c.length) }
        }
        return ''
    }

    /** Carousel
 */

    $('.main-carousel').slick({
        'adaptiveHeight': false,
        'dots': true,
        'autoplay': true,
        'infinite': true,
        'autoplaySpeed': 6000
    });

    // var flkty = new Flickity( '.main-carousel', {
    //     autoPlay: true,
    //     lazyLoad: true,
    //     adaptiveHeight: true,
    // });

    // $('.main-carousel').flickity({
    //   autoPlay: true,
    //   lazyLoad: true,
    //   adaptiveHeight: true,
    // });
});