const alpino__data = {
	navID: "nav-projects",
	page_loc_text: "Live Demo",
	template: `<div id="demo_page" class="demo-page page"><div class="demo_page-head flex"><div class="demo_page-back btn" title="Back to all projects"><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M21,11H6.83L10.41,7.41L9,6L3,12L9,18L10.41,16.58L6.83,13H21V11Z"/></svg></div><div class="demo_page-title">Alpino</div><div class="demo_page-info btn" title="Info"><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"/></svg></div></div><div class="demo_page-body"><div class="demo_options flex"><button id="btn_cube" type="button" class="btn btn--large btn--active"><div class="btn__content"><span>3D Cube</span></div></button><button id="btn_src" type="button" class="btn btn--large"><div class="btn__content"><span>Sources</span></div></button><button id="btn_help" type="button" class="btn btn--large"><div class="btn__content"><span>Help</span></div></button></div><div class="demo_page-cont flex justify-center align-center"><div class="alpino_container"><div id="alpino_cube"><div id="alpino_side-1" class="alpino_side alpino_front">side 1</div><div id="alpino_side-2" class="alpino_side alpino_back">side 2</div><div id="alpino_side-3" class="alpino_side alpino_right">side 3</div><div id="alpino_side-4" class="alpino_side alpino_left">side 4</div><div id="alpino_side-5" class="alpino_side alpino_top">side 5</div><div id="alpino_side-6" class="alpino_side alpino_bottom">side 6</div></div></div><div class="alpino_party" style="align-self:flex-end"><button type="button" id="party_btn" class="btn btn--lage">Party Mode!</button><button type="button" id="reset_btn" class="btn btn--lage">Reset</button></div></div><div class="demo_page-src flex column align-center" style="display:none"><div class="demo_src_side demo_src_side--close demo_src_side-1"><div><button type="button" class="btn btn--large btn-side">Side 1</button></div><div class="btn-options flex justify-center"><button type="button" class="btn btn--large btn-upld">Upload</button><button type="button" class="btn btn--large btn-embd">Embed</button><button type="button" class="btn btn--large btn-drct">Direct</button><button type="button" class="btn btn--large btn-remv">Remove</button></div><div id="demo-input-side-1" class="demo-input" style="display:none"><button type="button" class="btn btn--large btn-file-upload" disabled><span>-- No file Selected --</span></button><div class="flex row justify-center align-center relative input-group input-group--hide-details input-group--text-field input-group--single-line"><div class="input-group__input"><input placeholder="..." autocomplete="off" autocapitalize="off" spellcheck="false" tabindex="-1" type="text" value="" data-embd='' data-drct=''></div><div class="input-group__details"></div></div><input type="file" accept="audio/*,video/*,image/*"></div></div><div class="demo_src_side demo_src_side--close demo_src_side-2"><div><button type="button" class="btn btn--large btn-side">Side 2</button></div><div class="btn-options flex justify-center"><button type="button" class="btn btn--large btn-upld">Upload</button><button type="button" class="btn btn--large btn-embd">Embed</button><button type="button" class="btn btn--large btn-drct">Direct</button><button type="button" class="btn btn--large btn-remv">Remove</button></div><div id="demo-input-side-2" class="demo-input" style="display:none"><button type="button" class="btn btn--large btn-file-upload" disabled><span>-- No file Selected --</span></button><div class="flex row justify-center align-center relative input-group input-group--hide-details input-group--text-field input-group--single-line"><div class="input-group__input"><input placeholder="..." autocomplete="off" autocapitalize="off" spellcheck="false" tabindex="-1" type="text" value="" data-embd='' data-drct=''></div><div class="input-group__details"></div></div><input type="file" accept="audio/*,video/*,image/*"></div></div><div class="demo_src_side demo_src_side--close demo_src_side-3"><div><button type="button" class="btn btn--large btn-side">Side 3</button></div><div class="btn-options flex justify-center"><button type="button" class="btn btn--large btn-upld">Upload</button><button type="button" class="btn btn--large btn-embd">Embed</button><button type="button" class="btn btn--large btn-drct">Direct</button><button type="button" class="btn btn--large btn-remv">Remove</button></div><div id="demo-input-side-3" class="demo-input" style="display:none"><button type="button" class="btn btn--large btn-file-upload" disabled><span>-- No file Selected --</span></button><div class="flex row justify-center align-center relative input-group input-group--hide-details input-group--text-field input-group--single-line"><div class="input-group__input"><input placeholder="..." autocomplete="off" autocapitalize="off" spellcheck="false" tabindex="-1" type="text" value="" data-embd='' data-drct=''></div><div class="input-group__details"></div></div><input type="file" accept="audio/*,video/*,image/*"></div></div><div class="demo_src_side demo_src_side--close demo_src_side-4"><div><button type="button" class="btn btn--large btn-side">Side 4</button></div><div class="btn-options flex justify-center"><button type="button" class="btn btn--large btn-upld">Upload</button><button type="button" class="btn btn--large btn-embd">Embed</button><button type="button" class="btn btn--large btn-drct">Direct</button><button type="button" class="btn btn--large btn-remv">Remove</button></div><div id="demo-input-side-4" class="demo-input" style="display:none"><button type="button" class="btn btn--large btn-file-upload" disabled><span>-- No file Selected --</span></button><div class="flex row justify-center align-center relative input-group input-group--hide-details input-group--text-field input-group--single-line"><div class="input-group__input"><input placeholder="..." autocomplete="off" autocapitalize="off" spellcheck="false" tabindex="-1" type="text" value="" data-embd='' data-drct=''></div><div class="input-group__details"></div></div><input type="file" accept="audio/*,video/*,image/*"></div></div><div class="demo_src_side demo_src_side--close demo_src_side-5"><div><button type="button" class="btn btn--large btn-side">Side 5</button></div><div class="btn-options flex justify-center"><button type="button" class="btn btn--large btn-upld">Upload</button><button type="button" class="btn btn--large btn-embd">Embed</button><button type="button" class="btn btn--large btn-drct">Direct</button><button type="button" class="btn btn--large btn-remv">Remove</button></div><div id="demo-input-side-5" class="demo-input" style="display:none"><button type="button" class="btn btn--large btn-file-upload" disabled><span>-- No file Selected --</span></button><div class="flex row justify-center align-center relative input-group input-group--hide-details input-group--text-field input-group--single-line"><div class="input-group__input"><input placeholder="..." autocomplete="off" autocapitalize="off" spellcheck="false" tabindex="-1" type="text" value="" data-embd='' data-drct=''></div><div class="input-group__details"></div></div><input type="file" accept="audio/*,video/*,image/*"></div></div><div class="demo_src_side demo_src_side--close demo_src_side-6"><div><button type="button" class="btn btn--large btn-side">Side 6</button></div><div class="btn-options flex justify-center"><button type="button" class="btn btn--large btn-upld">Upload</button><button type="button" class="btn btn--large btn-embd">Embed</button><button type="button" class="btn btn--large btn-drct">Direct</button><button type="button" class="btn btn--large btn-remv">Remove</button></div><div id="demo-input-side-6" class="demo-input" style="display:none"><button type="button" class="btn btn--large btn-file-upload" disabled><span>-- No file Selected --</span></button><div class="flex row justify-center align-center relative input-group input-group--hide-details input-group--text-field input-group--single-line"><div class="input-group__input"><input placeholder="..." autocomplete="off" autocapitalize="off" spellcheck="false" tabindex="-1" type="text" value="" data-embd='' data-drct=''></div><div class="input-group__details"></div></div><input type="file" accept="audio/*,video/*,image/*"></div></div></div><div class="demo_page-help" style="display:none"><div id="alpino_manual"><p class="title highlight">Instructions and Features</p><ul><li>Designed for video, audio and images, but supports any html content</li><li>Interact with cube using <code style="color:#f83c69">3D cube</code> tab</li><li>Edit cube's sides' sources from <code style="color:#6fc56e">Sources</code> tab</li><li>Help and instruction (this page) at <code style="color:#6e6fc5">Help</code> tab</li><li>Rotate the cube using arrow keys <code>←</code> <code>↑</code> <code>→</code> <code>↓</code></li><li>Rotate the cube using <code>touch</code> or <code>mouse</code> movements</li><li>Zoom in/out cube using <code>+</code>/<code>-</code>keys</li></ul><p class="title highlight">Methods of media loading</p><ul><li><code style="color:#4caf50">Upload</code> local file from device</li><li><code style="color:#cf7814">Embed</code> html code</li><li><code style="color:#4c9baf">Direct</code> url</li><li><code style="color:#cf3a2f">Remove</code> everything and clear side</li></ul><p class="title highlight">YouTube Demo</p><pre>Feb 7, 2018</pre><div id="demo_help-yt" style="margin:20px auto;padding-bottom:40px"></div><p class="title highlight">Party mode credits</p><ul><li><code style="color:#fff;background-color:#f3c669">Side 1</code> Quote from Assassin's Creed II</li><li><code style="color:#fff;background-color:#9c27b0">Side 2</code> Not Applicable</li><li><code style="color:#fff;background-color:#00897b">Side 3</code> Need for Speed Most Wanted 2012</li><li><code style="color:#fff;background-color:#ff5622">Side 4</code> Grant - Castaway (feat. Jessi Mason) <a class="highlight" href="https://www.youtube.com/watch?v=wQK0tzxATD8" rel="noopener">YouTube</a></li><li><code style="color:#fff;background-color:#607d8b">Side 5</code> GTA IV PC Trailer <a class="highlight" href="https://www.youtube.com/watch?v=Fh2egiqQY8A" rel="noopener">YouTube</a></li><li><code style="color:#fff;background-color:#c0ca33">Side 6</code> Assassin’s Creed III Remastered: Comparison Trailer <a class="highlight" href="https://www.youtube.com/watch?v=9IupDCUCFK4" rel="noopener">YouTube</a></li></ul></div></div></div></div>`,
	style: `@media (max-width:499px){#demo_page{max-width:100vw;overflow:hidden}}#demo_page .demo_page-head{padding-top:16px;padding-bottom:16px;width:100%;border-bottom:3px double;height:80px}#demo_page .demo_page-back,#demo_page .demo_page-info{background-color:transparent;box-shadow:none}#demo_page .demo_page-head svg{cursor:pointer}#demo_page .demo_page-head svg:hover{color:#f3c669}#demo_page button{outline:0}#demo_page .demo_page-title{width:100%;font-size:28px;text-align:center;margin:auto}@media (max-width:600px){#demo_page .demo_page-title{font-size:4.5vw}}.demo_page-body .demo_page-cont,.demo_page-body .demo_page-help,.demo_page-body .demo_page-src{min-height:80vh;border-bottom:3px double}.demo_page-body .demo_options{background-color:#212121}.demo_page-body .demo_options button{height:54px;width:100%;margin:0}#btn_cube.btn--active,#btn_cube:hover{color:#f83c69}#btn_cube:hover .btn__content::before{background-color:#f83c69}#btn_src.btn--active,#btn_src:hover{color:#6fc56e}#btn_src:hover .btn__content::before{background-color:#6fc56e}#btn_help.btn--active,#btn_help:hover{color:#6e6fc5}#btn_help:hover .btn__content::before{background-color:#6e6fc5}.alpino_container{position:relative;width:300px;height:300px;margin:100px auto;perspective:600px;display:flex}#alpino_cube{width:inherit;height:inherit;transform-style:preserve-3d;margin:auto}.alpino_side{display:flex;align-items:center;justify-content:center;position:absolute;width:inherit;height:inherit;border:1px solid #000;font-size:20px;text-align:center;color:#fff;overflow:inherit}.alpino_side *{outline:0}.alpino_front{transform:translateZ(150px);background-color:#f3c66977}.alpino_back{transform:rotateY(180deg) translateZ(150px);background-color:#9c27b077}.alpino_right{transform:rotateY(90deg) translateZ(150px);background-color:#00897b77}.alpino_left{transform:rotateY(-90deg) translateZ(150px);background-color:#ff562277}.alpino_top{transform:rotateX(90deg) translateZ(150px);background-color:#607d8b77}.alpino_bottom{transform:rotateX(-90deg) translateZ(150px);background-color:#c0ca3377}@media (max-width:959px){.alpino_container{width:200px;height:200px;perspective:300px}.alpino_side{font-size:14px}.alpino_front{transform:translateZ(100px)}.alpino_back{transform:rotateY(180deg) translateZ(100px)}.alpino_right{transform:rotateY(90deg) translateZ(100px)}.alpino_left{transform:rotateY(-90deg) translateZ(100px)}.alpino_top{transform:rotateX(90deg) translateZ(100px)}.alpino_bottom{transform:rotateX(-90deg) translateZ(100px)}}.alpino_party{position:absolute}.demo_page-src .demo_src_side:first-child{margin-top:30px}.demo_page-src .demo_src_side:last-child{margin-bottom:30px}.demo_src_side{width:80vw;max-width:500px;padding:8px;background-color:#00000000}.demo_src_side button{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)!important}.demo_src_side .btn-file-upload{background-color:#0007!important;overflow:hidden;padding-left:20px;padding-right:20px;text-overflow:ellipsis}.demo_src_side .btn-file-upload span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.demo_src_side .btn-file-upload,.demo_src_side button.btn-side{width:100%;max-width:500px;margin-left:0;margin-right:0}.demo_src_side .btn-options{align-content:space-between}.demo_src_side.demo_src_side--close .btn-options{width:0;display:none}.demo_src_side .btn-options button{width:80%}@media (min-width:600px){.demo_src_side .btn-options button:first-child{margin-left:0}.demo_src_side .btn-options button:last-child{margin-right:0}}@media (max-width:599px){.demo_src_side .btn-options{flex-wrap:wrap}.demo_src_side .btn-options button{width:40%}}.demo_src_side-1 .btn-side,.demo_src_side-1:not(.demo_src_side--close){background-color:#f3c66977!important}.demo_src_side-1.demo_src_side--close .btn-side:hover,.demo_src_side-1:not(.demo_src_side--close) .btn-side{background-color:#f3c669!important}.demo_src_side-2 .btn-side,.demo_src_side-2:not(.demo_src_side--close){background-color:#9c27b077!important}.demo_src_side-2.demo_src_side--close .btn-side:hover,.demo_src_side-2:not(.demo_src_side--close) .btn-side{background-color:#9c27b0!important}.demo_src_side-3 .btn-side,.demo_src_side-3:not(.demo_src_side--close){background-color:#00897b77!important}.demo_src_side-3.demo_src_side--close .btn-side:hover,.demo_src_side-3:not(.demo_src_side--close) .btn-side{background-color:#00897b!important}.demo_src_side-4 .btn-side,.demo_src_side-4:not(.demo_src_side--close){background-color:#ff562277!important}.demo_src_side-4.demo_src_side--close .btn-side:hover,.demo_src_side-4:not(.demo_src_side--close) .btn-side{background-color:#ff5622!important}.demo_src_side-5 .btn-side,.demo_src_side-5:not(.demo_src_side--close){background-color:#607d8b77!important}.demo_src_side-5.demo_src_side--close .btn-side:hover,.demo_src_side-5:not(.demo_src_side--close) .btn-side{background-color:#607d8b!important}.demo_src_side-6 .btn-side,.demo_src_side-6:not(.demo_src_side--close){background-color:#c0ca3377!important}.demo_src_side-6.demo_src_side--close .btn-side:hover,.demo_src_side-6:not(.demo_src_side--close) .btn-side{background-color:#c0ca33!important}.demo-input input{text-align:center}.demo-input input::placeholder{text-align:left;padding-left:5px;color:#ffffff99}.demo-input .input-group:hover .input-group__details::before{background-color:hsla(0,0%,100%,.7)!important}.demo_src_side.demo_src_side--close .demo-input{display:none!important}#demo-input-side-1 input{caret-color:#f3c669}#demo-input-side-1 .input-group.input-group--focused .input-group__details::after{background-color:#f3c669!important}#demo-input-side-2 input{caret-color:#9c27b0}#demo-input-side-2 .input-group.input-group--focused .input-group__details::after{background-color:#9c27b0!important}#demo-input-side-3 input{caret-color:#00897b}#demo-input-side-3 .input-group.input-group--focused .input-group__details::after{background-color:#00897b!important}#demo-input-side-4 input{caret-color:#ff5622}#demo-input-side-4 .input-group.input-group--focused .input-group__details::after{background-color:#ff5622!important}#demo-input-side-5 input{caret-color:#607d8b}#demo-input-side-5 .input-group.input-group--focused .input-group__details::after{background-color:#607d8b!important}#demo-input-side-6 input{caret-color:#c0ca33}#demo-input-side-6 .input-group.input-group--focused .input-group__details::after{background-color:#c0ca33!important}.demo_src_side .demo-input .input-group,.demo_src_side .demo-input button,.demo_src_side .demo-input input[type=file]{display:none}.demo_src_side.btn-drct-access .demo-input .input-group,.demo_src_side.btn-drct-active:not(.btn-upld-access):not(.btn-embd-access) .demo-input .input-group,.demo_src_side.btn-embd-access .demo-input .input-group,.demo_src_side.btn-embd-active:not(.btn-drct-access):not(.btn-upld-access) .demo-input .input-group,.demo_src_side.btn-upld-access .demo-input button,.demo_src_side.btn-upld-active:not(.btn-drct-access):not(.btn-embd-access) .demo-input button{display:block}.demo_src_side.btn-drct-access button.btn-drct,.demo_src_side.btn-embd-access button.btn-embd,.demo_src_side.btn-upld-access button.btn-upld{border:2px solid #fff}.demo_src_side.btn-drct-active button.btn-drct,.demo_src_side.btn-embd-active button.btn-embd,.demo_src_side.btn-upld-active button.btn-upld{background-color:#4caf50!important}.demo-input{display:flex!important}.alpino_help{width:80vw;max-width:700px;margin:auto;margin-top:20px}#alpino_manual{width:80vw;margin:10vw auto;border:3px double;max-width:1200px;text-align:center;font-family:"Segoe UI",Arial,sans-serif;font-weight:400}@media (max-width:599px){#alpino_manual{width:90vw;margin:5vw auto}}#alpino_manual .title{margin-top:20px;text-align:center;font-size:20px}#alpino_manual ul{list-style-type:disc;padding-inline-start:40px;text-align:left;margin:35px}@media (max-width:599px){#alpino_manual ul{list-style-type:disc;padding-inline-start:10px;text-align:left;margin:20px}}`,
	apply: (root, URLInfo) => {
		if (root === undefined) {
			console.warn('Error: contentRoot not specified')
			return
		}
		root.innerHTML = alpino__data.template
		alpino__data.onStaticLoad(root, URLInfo)
	},
	onStaticLoad: (root, URLInfo) => {
		if (root === undefined) {
			console.warn('Error: contentRoot not specified')
			return
		}
		const demoBackBtn = root.querySelector('.demo_page-back')
		const demoInfoBtn = root.querySelector('.demo_page-info')
		demoBackBtn.addEventListener('click', (e) => {
			if (e.ctrlKey) window.open(URLInfo.protocol + '://' + URLInfo.domain + '/projects')
			else {
				spa.navigate(URLInfo.protocol + '://' + URLInfo.domain + '/projects')
			}
			e.preventDefault()
		})
		demoInfoBtn.addEventListener('click', () => {
			showDialog(`<div class="card" style="height:auto"><div class="card__title headline">About Alpino</div><div class="card__text">A 3-D web media player made for <span class='highlight'>Microsoft Code.Fun.Do</span>. This is primarily a 3D interactive media player but we can place any html content.</div><div class="card__actions"><div class="spacer"></div><a target="_blank" rel="noopener" href="https://github.com/ankurparihar/Alpino" class="btn btn--flat green--text text--darken-1"><div class="btn__content">View on Github</div></a></div></div>`)
		})
		root.querySelectorAll('.demo_page-body button').forEach(btn => {
			btn.addEventListener('click', (e) => {
				showRippleEffect(e, btn)
			})
		})
		alpino__data.isCubeActive = true
		alpino__data.cube = document.getElementById('alpino_cube')
		alpino__data.side1 = document.getElementById('alpino_side-1')
		alpino__data.side2 = document.getElementById('alpino_side-2')
		alpino__data.side3 = document.getElementById('alpino_side-3')
		alpino__data.side4 = document.getElementById('alpino_side-4')
		alpino__data.side5 = document.getElementById('alpino_side-5')
		alpino__data.side6 = document.getElementById('alpino_side-6')
		const demo_cont = document.querySelector('.demo_page-cont')
		const demo_src = document.querySelector('.demo_page-src')
		const demo_help = document.querySelector('.demo_page-help')
		document.onkeydown = (e) => {
			if (alpino__data.isCubeActive) {
				if (e.keyCode === 37) {
					// left key
					alpino__data.rotate(0, -4)
					e.preventDefault()
				}
				else if (e.keyCode === 38) {
					// up key
					alpino__data.rotate(4, 0)
					e.preventDefault()
				}
				else if (e.keyCode === 39) {
					// right key
					alpino__data.rotate(0, 4)
					e.preventDefault()
				}
				else if (e.keyCode === 40) {
					// down key
					alpino__data.rotate(-4, 0)
					e.preventDefault()
				}
				else if (e.keyCode === 107) {
					// add key
					alpino__data.zoom(true)
					e.preventDefault()
				}
				else if (e.keyCode === 109) {
					alpino__data.zoom(false)
					e.preventDefault()
				}
			}
		}
		demo_cont.onmousedown = (e) => {
			alpino__data.clientX = e.clientX
			alpino__data.clientY = e.clientY
			alpino__data.mousePress = true
		}
		demo_cont.onmouseup = () => { alpino__data.mousePress = false }
		demo_cont.ontouchstart = (e) => {
			alpino__data.clientX = e.touches[0].clientX
			alpino__data.clientY = e.touches[0].clientY
		}
		demo_cont.ontouchmove = (e) => {
			var x = e.changedTouches[0].clientX
			var y = e.changedTouches[0].clientY
			alpino__data.rotate(alpino__data.clientY - y, x - alpino__data.clientX)
			alpino__data.clientX = x
			alpino__data.clientY = y
		}
		demo_cont.onmousemove = (e) => {
			if (alpino__data.mousePress === true) {
				var x = e.clientX
				var y = e.clientY
				alpino__data.rotate(alpino__data.clientY - y, x - alpino__data.clientX)
				alpino__data.clientX = x
				alpino__data.clientY = y
			}
		}
		const cubeBtn = document.getElementById('btn_cube')
		const srcBtn = document.getElementById('btn_src')
		const helpBtn = document.getElementById('btn_help')
		cubeBtn.addEventListener('click', () => {
			demo_src.style.display = 'none'
			demo_help.style.display = 'none'
			demo_cont.style.display = 'flex'
			cubeBtn.classList.add('btn--active')
			srcBtn.classList.remove('btn--active')
			helpBtn.classList.remove('btn--active')
			alpino__data.isCubeActive = true
		})
		srcBtn.addEventListener('click', () => {
			demo_cont.style.display = 'none'
			demo_help.style.display = 'none'
			demo_src.style.display = 'flex'
			srcBtn.classList.add('btn--active')
			cubeBtn.classList.remove('btn--active')
			helpBtn.classList.remove('btn--active')
			alpino__data.isCubeActive = false
		})
		helpBtn.addEventListener('click', () => {
			demo_cont.style.display = 'none'
			demo_src.style.display = 'none'
			demo_help.style.display = 'block'
			helpBtn.classList.add('btn--active')
			srcBtn.classList.remove('btn--active')
			cubeBtn.classList.remove('btn--active')
			alpino__data.isCubeActive = false
		})
		const sideBtns = root.querySelectorAll('.demo_src_side .btn-side')
		sideBtns.forEach(btn => {
			btn.addEventListener('click', () => {
				var close = btn.parentElement.parentElement.classList.contains('demo_src_side--close')
				sideBtns.forEach(sideBtn => {
					sideBtn.parentElement.parentElement.classList.add('demo_src_side--close')
				})
				btn.parentElement.parentElement.classList.remove('btn-upld-access', 'btn-drct-access', 'btn-embd-access')
				if (close) btn.parentElement.parentElement.classList.remove('demo_src_side--close')
				else btn.parentElement.parentElement.classList.add('demo_src_side--close')
			})
		})
		demo_src.querySelectorAll('.demo-input input').forEach(input => {
			input.onfocus = () => {
				input.parentElement.parentElement.classList.add('input-group--focused', 'input-group--tab-focused')
			}
			input.onblur = () => {
				input.parentElement.parentElement.classList.remove('input-group--focused', 'input-group--tab-focused')
			}
		})
		demo_src.querySelectorAll('.btn-upld').forEach(upldBtn => {
			upldBtn.addEventListener('click', () => {
				const demoSrcSide = upldBtn.parentElement.parentElement
				demoSrcSide.classList.remove('btn-drct-access', 'btn-embd-access')
				demoSrcSide.classList.add('btn-upld-access')
				const fileInput = demoSrcSide.querySelector('input[type="file"]')
				demoSrcSide.classList.add('btn-upld-access')
				var clickEvent = new MouseEvent('click', {
					bubbles: true,
					cancelable: true,
				})
				fileInput.dispatchEvent(clickEvent)
			})
		})
		demo_src.querySelectorAll('.btn-embd').forEach(embdBtn => {
			embdBtn.addEventListener('click', () => {
				const demoSrcSide = embdBtn.parentElement.parentElement
				const textInput = demoSrcSide.querySelector('input[type="text"]')
				textInput.placeholder = 'Insert embed code'
				textInput.value = textInput.getAttribute('data-embd')
				demoSrcSide.classList.remove('btn-upld-access', 'btn-drct-access')
				demoSrcSide.classList.add('btn-embd-access')
			})
		})
		demo_src.querySelectorAll('.btn-drct').forEach(drctBtn => {
			drctBtn.addEventListener('click', () => {
				const demoSrcSide = drctBtn.parentElement.parentElement
				const textInput = demoSrcSide.querySelector('input[type="text"]')
				textInput.placeholder = 'Insert direct url'
				textInput.value = textInput.getAttribute('data-drct')
				demoSrcSide.classList.remove('btn-upld-access', 'btn-embd-access')
				demoSrcSide.classList.add('btn-drct-access')
			})
		})
		demo_src.querySelectorAll('.btn-remv').forEach(remvBtn => {
			remvBtn.addEventListener('click', () => {
				const demoSrcSide = remvBtn.parentElement.parentElement
				const side = alpino__data.getSide(demoSrcSide)
				if (side < 1 || side > 6) return
				alpino__data.cube.querySelector('#alpino_side-' + side).innerHTML = 'side ' + side
				const textInput = demoSrcSide.querySelector('input[type="text"]')
				textInput.setAttribute('data-embd', '')
				textInput.setAttribute('data-drct', '')
				const fileBtn = demoSrcSide.querySelector('.btn-file-upload')
				fileBtn.innerHTML = `<span>-- No file Selected --</span>`
				demoSrcSide.setAttribute('class', 'demo_src_side demo_src_side-' + side)
			})
		})
		demo_src.querySelectorAll('input[type="file"]').forEach(fileInput => {
			fileInput.onchange = () => {
				const file = fileInput.files[0]
				if (file === undefined) return
				const demoSrcSide = fileInput.parentElement.parentElement
				const side = alpino__data.getSide(demoSrcSide)
				if (side < 1 || side > 6) return
				const fileType = alpino__data.getFileType(file)
				const cubeSide = alpino__data.cube.querySelector('#alpino_side-' + side)
				if (fileType === 'video') {
					alpino__data.addVideoSide(cubeSide, window.URL.createObjectURL(file), file.type)
				} else if (fileType === 'audio') {
					alpino__data.addAudioSide(cubeSide, window.URL.createObjectURL(file), file.type)
				} else if (fileType === 'image') {
					alpino__data.addImageSide(cubeSide, window.URL.createObjectURL(file), file.type)
				} else {
					return
				}
				demoSrcSide.querySelector('.btn-file-upload span').innerHTML = file.name
				demoSrcSide.setAttribute('class', 'demo_src_side btn-upld-active demo_src_side-' + side)
			}
		})
		demo_src.querySelectorAll('input[type="text"]').forEach(textInput => {
			textInput.oninput = () => {
				const demoSrcSide = textInput.parentElement.parentElement.parentElement.parentElement
				if (demoSrcSide.classList.contains('btn-drct-active') || demoSrcSide.classList.contains('btn-drct-access')) {
					textInput.setAttribute('data-drct', textInput.value)
				} else if (demoSrcSide.classList.contains('btn-embd-active') || demoSrcSide.classList.contains('btn-embd-access')) {
					textInput.setAttribute('data-embd', textInput.value)
				}
			}
			textInput.onchange = () => {
				const demoSrcSide = textInput.parentElement.parentElement.parentElement.parentElement
				const side = alpino__data.getSide(demoSrcSide)
				if (side < 1 || side > 6) return
				const cubeSide = alpino__data.cube.querySelector('#alpino_side-' + side)
				if (demoSrcSide.classList.contains('btn-drct-access')) {
					const url = textInput.value
					const ext = url.split('.').pop()
					if (ext == 'mp4' || ext == 'ogg' || ext == 'webm') {
						alpino__data.addVideoSide(cubeSide, url, ext)
					} else if (ext == 'mp3' || ext == 'wav') {
						alpino__data.addAudioSide(cubeSide, url, ext)
					} else if (ext == 'bmp' || ext == 'gif' || ext == 'ico' || ext == 'jpg' || ext == 'jpeg' || ext == 'png') {
						alpino__data.addImageSide(cubeSide, url, ext)
					}
					demoSrcSide.setAttribute('class', 'demo_src_side btn-drct-active demo_src_side-' + side)
				} else if (demoSrcSide.classList.contains('btn-embd-access')) {
					cubeSide.innerHTML = textInput.value
					demoSrcSide.setAttribute('class', 'demo_src_side btn-embd-active demo_src_side-' + side)
				}
			}
		})
		demo_cont.querySelector('#party_btn').addEventListener('click', () => {
			// side 1
			var clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true })
			var demoSrcSide = document.querySelector('.demo_src_side-1')
			demoSrcSide.querySelector('.btn-embd').dispatchEvent(clickEvent)
			var input = demoSrcSide.querySelector('input[type="text"]')
			input.value = `<div class="assasin_quote" style="width:100%;height:100%;background-color:#00000077;display:flex;justify-content:center"><div class="quote_box" style="margin:auto 20px;font-style:italic;font-size:12px"><p>“It is a good life we lead, brother”</p><p>“The best. May it never change”</p><p>“And may it never change us”</p></div></div>`
			var inputEvent = new Event('input', { bubbles: true, cancelable: true })
			var changeEvent = new Event('change', { bubbles: true, cancelable: true })
			input.dispatchEvent(inputEvent)
			input.dispatchEvent(changeEvent)
			demoSrcSide.classList.add('demo_src_side--close')
			// side 2
			demoSrcSide = document.querySelector('.demo_src_side-2')
			clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true })
			demoSrcSide.querySelector('.btn-embd').dispatchEvent(clickEvent)
			input = demoSrcSide.querySelector('input[type="text"]')
			input.value = `<button type="button" class="btn btn--lage">Reset</button>`
			inputEvent = new Event('input', { bubbles: true, cancelable: true })
			changeEvent = new Event('change', { bubbles: true, cancelable: true })
			input.dispatchEvent(inputEvent)
			input.dispatchEvent(changeEvent)
			demoSrcSide.classList.add('demo_src_side--close')
			alpino__data.side2.querySelector('button').addEventListener('click', alpino__data.reset)
			// side 3
			demoSrcSide = document.querySelector('.demo_src_side-3')
			clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true })
			demoSrcSide.querySelector('.btn-drct').dispatchEvent(clickEvent)
			input = demoSrcSide.querySelector('input[type="text"]')
			input.value = `./party_content/image.jpg`
			inputEvent = new Event('input', { bubbles: true, cancelable: true })
			changeEvent = new Event('change', { bubbles: true, cancelable: true })
			input.dispatchEvent(inputEvent)
			input.dispatchEvent(changeEvent)
			demoSrcSide.classList.add('demo_src_side--close')
			// side 4
			demoSrcSide = document.querySelector('.demo_src_side-4')
			clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true })
			demoSrcSide.querySelector('.btn-drct').dispatchEvent(clickEvent)
			input = demoSrcSide.querySelector('input[type="text"]')
			input.value = `./party_content/audio.mp3`
			inputEvent = new Event('input', { bubbles: true, cancelable: true })
			changeEvent = new Event('change', { bubbles: true, cancelable: true })
			input.dispatchEvent(inputEvent)
			input.dispatchEvent(changeEvent)
			demoSrcSide.classList.add('demo_src_side--close')
			// side 5
			demoSrcSide = document.querySelector('.demo_src_side-5')
			clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true })
			demoSrcSide.querySelector('.btn-drct').dispatchEvent(clickEvent)
			input = demoSrcSide.querySelector('input[type="text"]')
			input.value = `./party_content/video.mp4`
			inputEvent = new Event('input', { bubbles: true, cancelable: true })
			changeEvent = new Event('change', { bubbles: true, cancelable: true })
			input.dispatchEvent(inputEvent)
			input.dispatchEvent(changeEvent)
			demoSrcSide.classList.add('demo_src_side--close')
			// side 6
			demoSrcSide = document.querySelector('.demo_src_side-6')
			clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true })
			demoSrcSide.querySelector('.btn-embd').dispatchEvent(clickEvent)
			input = demoSrcSide.querySelector('input[type="text"]')
			input.value = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/9IupDCUCFK4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
			inputEvent = new Event('input', { bubbles: true, cancelable: true })
			changeEvent = new Event('change', { bubbles: true, cancelable: true })
			input.dispatchEvent(inputEvent)
			input.dispatchEvent(changeEvent)
			demoSrcSide.classList.add('demo_src_side--close')
		})
		demo_cont.querySelector('#reset_btn').addEventListener('click', alpino__data.reset)
		document.getElementById('demo_help-yt').innerHTML = `<iframe width="560px" height="315px" src="https://www.youtube.com/embed/1hnz1ZxAG-c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
	},
	cube: undefined,
	isCubeActive: undefined,
	side1: undefined,
	side2: undefined,
	side3: undefined,
	side4: undefined,
	side5: undefined,
	side6: undefined,
	rotateY: 0,
	rotateX: 0,
	scale: 1,
	mousePress: false,
	clientX: undefined,
	clientY: undefined,
	srcState: undefined,
	rotate: (dx, dy) => {
		alpino__data.rotateX += dx
		alpino__data.rotateY += dy
		if (alpino__data.rotateX < 0) alpino__data.rotateX += 360
		else if (alpino__data.rotateX >= 360) alpino__data.rotateX -= 360
		if (alpino__data.rotateY < 0) alpino__data.rotateY += 360
		else if (alpino__data.rotateY >= 360) alpino__data.rotateY -= 360
		alpino__data.cube.style.transform = 'rotateY(' + alpino__data.rotateY + 'deg)' + 'rotateX(' + alpino__data.rotateX + 'deg)'
	},
	zoom: (v) => {
		if (v == true) {
			alpino__data.scale += 0.005
		} else {
			alpino__data.scale -= 0.005
		}
		if (alpino__data.scale < 0) alpino__data.scale = 0
		else if (alpino__data.scale > 2) alpino__data.scale = 2
		const translateSide = ((window.innerWidth < 960) ? 100 : 150) * alpino__data.scale
		const containerSide = ((window.innerWidth < 960) ? 200 : 300) * alpino__data.scale
		const perspective = ((window.innerWidth < 960) ? 300 : 600) * alpino__data.scale
		alpino__data.cube.parentElement.style.width = containerSide + 'px'
		alpino__data.cube.parentElement.style.height = containerSide + 'px'
		alpino__data.cube.parentElement.style.perspective = perspective + 'px'
		alpino__data.side1.style.transform = 'translateZ(' + translateSide + 'px)'
		alpino__data.side2.style.transform = 'rotateY(180deg) translateZ(' + translateSide + 'px)'
		alpino__data.side3.style.transform = 'rotateY(90deg) translateZ(' + translateSide + 'px)'
		alpino__data.side4.style.transform = 'rotateY(-90deg) translateZ(' + translateSide + 'px)'
		alpino__data.side5.style.transform = 'rotateX(90deg) translateZ(' + translateSide + 'px)'
		alpino__data.side6.style.transform = 'rotateX(-90deg) translateZ(' + translateSide + 'px)'
	},
	getSide: (demoSrcSide) => {
		let side = 0
		if (demoSrcSide.classList.contains('demo_src_side-1')) side = 1
		else if (demoSrcSide.classList.contains('demo_src_side-2')) side = 2
		else if (demoSrcSide.classList.contains('demo_src_side-3')) side = 3
		else if (demoSrcSide.classList.contains('demo_src_side-4')) side = 4
		else if (demoSrcSide.classList.contains('demo_src_side-5')) side = 5
		else if (demoSrcSide.classList.contains('demo_src_side-6')) side = 6
		return side
	},
	getFileType: (file) => {
		if (file === undefined) return
		if (file.type.match('image.*')) return 'image'
		else if (file.type.match('audio.*')) return 'audio'
		else if (file.type.match('video.*')) return 'video'
	},
	addImageSide: (cubeSide, url, type) => {
		const image = document.createElement('img')
		image.innerHTML = `This browser doesn't support ${type} file type`
		cubeSide.innerHTML = ''
		cubeSide.appendChild(image)
		image.setAttribute('src', url)
		image.onload = () => {
			if (image.height > image.width) {
				image.setAttribute('style', 'height:100%;width:auto')
			} else {
				image.setAttribute('style', 'height:auto;width:100%')
			}
		}
	},
	addAudioSide: (cubeSide, url, type) => {
		const audio = document.createElement('audio')
		audio.innerHTML = `This browser doesn't support ${type} file type`
		audio.setAttribute('src', url)
		audio.setAttribute('controls', 'true')
		audio.setAttribute('style', 'width:100%')
		cubeSide.innerHTML = ''
		cubeSide.appendChild(audio)
	},
	addVideoSide: (cubeSide, url, type) => {
		const video = document.createElement('video')
		video.innerHTML = `This browser doesn't support ${type} file type`
		video.setAttribute('src', url)
		video.setAttribute('controls', 'true')
		video.setAttribute('style', 'width:100%;height:100%')
		cubeSide.innerHTML = ''
		cubeSide.appendChild(video)
	},
	reset: () => {
		const demo_src = document.querySelector('.demo_page-src')
		demo_src.querySelectorAll('.btn-remv').forEach(btn => {
			var clickEvent = new MouseEvent('click', {
				bubbles: true,
				cancelable: true
			})
			btn.dispatchEvent(clickEvent)
		})
		demo_src.querySelectorAll('.btn-side').forEach(btn => {
			btn.parentElement.parentElement.classList.add('demo_src_side--close')
		})
		const zoom = alpino__data.scale < 1
		var rX = true
		var rY = true
		function smoothReset() {
			if (rX || rY) {
				if (alpino__data.rotateX < 10) {
					alpino__data.rotate(-alpino__data.rotateX, 0)
					rX = false
				}
				if (alpino__data.rotateY < 10) {
					alpino__data.rotate(0, -alpino__data.rotateY)
					rY = false
				}
				alpino__data.rotate(rX ? -4 : 0, rY ? -4 : 0)
			}
			if (alpino__data.scale > 1.02 || alpino__data.scale < 0.98) {
				alpino__data.zoom(zoom)
			}
			if (rX || rY || alpino__data.scale > 1.02 || alpino__data.scale < 0.98) setTimeout(smoothReset, 50)
		}
		smoothReset()
	}
}

spa.register('/projects/Alpino', alpino__data)