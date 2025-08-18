const config = {
	hiddenElements: [],
	inputs : [
		{
			label : 'Line Color',
			type : 'color',
			selector : ['#lines'],
			property : 'stroke',
			defaultValue : '#c8c5a0',
			css : false
		},
		{
			label : 'Tab Color',
			type : 'color',
			selector : ['#color_tab'],
			property : 'fill',
			defaultValue : '#004711',
			css : true
		},
		{
			label : 'Preview Size',
			type : 'range',
			selector : ['svg'],
			property : 'width',
			min : 300,
			max : 900,
			step : 10,
			defaultValue : 300,
			css : false
		}
	],
	renderCSS: (selector, declarations)=>{
		return (`${selector} {
	${declarations}
}`)
	}
}

export default config