const config = {
	hiddenElements : ['#body'],
	inputs : [
		{
			label : 'Frame Color',
			type : 'color',
			selector : ['#top-curve', '#bottom-curve'],
			property : 'fill',
			value : '#000'
		},
		{
			label : 'Body Color',
			type : 'color',
			selector : '#background',
			property : 'fill',
			value : '#D3D99F',
			outputSelector : '.note',
			outputProperty : 'background-color',
		},
		{
			label : 'Text Color',
			type : 'color',
			selector : '#body-text > text',
			property : 'fill',
			value : '#000',
			outputSelector : '.note',
			outputProperty : 'color',
		}
	]
}

export default config