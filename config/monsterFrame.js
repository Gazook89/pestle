const config = {
	inputs : [
		{
			label : 'Bar Color',
			type : 'color',
			selector : ['#barsBlendFilter > feFlood'],
			property : 'flood-color',
			defaultValue : '#ffd226',
			includeInCSS : false
		},
		{
			label : 'Body Color',
			type : 'color',
			selector : ['#bodyBlendFilter > feFlood'],
			property : 'flood-color',
			defaultValue : '#fff3c7',
			includeInCSS : false
		}
	]
}

export default config