const config = {
	hiddenElements: [],
	inputs : [
		{
			label : 'Line Color',
			type : 'color',
			selector : ['#lines'],
			property : 'stroke',
			value : '#c8c5a0'
		},
		{
			label : 'Tab Color',
			type : 'color',
			selector : ['#color_tab'],
			property : 'fill',
			value : '#004711',
		},
	],
	renderCSS: (selector, declarations)=>{
		return (`${selector} {
	${declarations}
}`)
	}
}

export default config