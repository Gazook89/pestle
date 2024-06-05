const config = {
	"hiddenElements": ['#body'],
	"inputs" : [
		{
			"label" : "Frame Color",
			"type" : "color",
			"selector" : ["#top-curve", "#bottom-curve"],
			"property" : "fill",
			"defaultValue" : "#000"
		},
		{
			"label" : "Body Color",
			"type" : "color",
			"selector" : "#background",
			"property" : "fill",
			"defaultValue" : "#D3D99F"
		},
		{
			"label" : "Text Color",
			"type" : "color",
			"selector" : "#body-text > text",
			"property" : "fill",
			"defaultValue" : "#000"
		}
	]
}

export default config