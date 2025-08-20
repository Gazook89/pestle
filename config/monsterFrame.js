const config = {
	inputs : [
		{
			label : 'Bar Color',
			type : 'color',
			selector : ['#barsBlendFilter > feFlood'],
			property : 'flood-color',
			value : '#ffd226',
			includeInCSS : false
		},
		{
			label : 'Body Color',
			type : 'color',
			selector : ['#bodyBlendFilter > feFlood'],
			property : 'flood-color',
			value : '#fff3c7',
			includeInCSS : false
		}
	]
}

export default config