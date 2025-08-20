const config = {
	hiddenElements : ['#text', '#rows'],
	inputs : [
		{
			label : 'Outer Stroke Color',
			type : 'color',
			selector : '#outer-color-frame > *',
			outputSelector : null,
			property : 'stroke',
			value : '#f2ce4a',
		},
		{
			label : 'Inner Stroke Color',
			type : 'color',
			selector : ['#inner-color-frame > *', '#inner-color-frame-circles > *'],
			outputSelector : null,
			property : 'stroke',
			value : '#141414'
		},
		{
			label : 'Outer Stroke Width',
			type : 'range',
			selector : '#outer-color-frame > *',
			outputSelector : null,
			property : 'stroke-width',
			min : 0,
			max : 20,
			step : 0.2,
			value : 15
		},
		{
			label : 'Inner Stroke Width',
			type : 'range',
			selector : '#inner-color-frame > *',
			outputSelector : null,
			property : 'stroke-width',
			min : 0,
			max : 20,
			step : 0.2,
			value : 8
		},
		{
			label : 'Inside Color',
			type : 'color',
			selector : '#frame-body',
			property : 'fill',
			outputSelector : '.classTable.frame',
			outputProperty : 'background-color',
			value : '#FFF'
		},
		{
			label : 'Text Color',
			type : 'color',
			selector : 'text',
			property : 'fill',
			outputSelector : '.classTable',
			outputProperty : 'color',
			value : '#000'
		},
		{
			label : 'Row Color',
			type : 'color',
			selector : '#rows > *',
			property : 'fill',
			outputSelector : '.classTable tbody tr(:nth-child(odd))',
			outputProperty : 'background-color',
			value : '#D4F7A1'
		}
	]
}

export default config;
