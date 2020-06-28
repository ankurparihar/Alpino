const alpino__data = {
	navID: "nav-projects",
	page_loc_text: "Live Demo",
	template: ``,
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