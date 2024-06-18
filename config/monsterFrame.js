const config = {
	"inputs" : [
		{
			"label" : "Bar Color",
			"type" : "color",
			"selector" : ["#barsBlendFilter > feFlood"],
			"property" : "flood-color",
			"defaultValue" : "#ffd226"
		},
		{
			"label" : "Body Color",
			"type" : "color",
			"selector" : ["#bodyBlendFilter > feFlood"],
			"property" : "flood-color",
			"defaultValue" : "#fff3c7"
		}
	]
}

export default config