const config = {
	hbSelectorRoot : '.page .note',
	hiddenElements : ['#body'],
	inputs : [
		{
			label : 'Frame Color',
			type : 'color',
			selector : ['#top-curve', '#bottom-curve'],
			property : 'fill',
			defaultValue : '#000'
		},
		{
			label : 'Body Color',
			type : 'color',
			selector : '#background',
			property : 'fill',
			defaultValue : '#D3D99F',
			css : {
				selector : null,
				property : 'background-color',
			}
		},
		{
			label : 'Text Color',
			type : 'color',
			selector : '#body-text > text',
			property : 'fill',
			defaultValue : '#000',
			css : {
				selector : null,
				property : 'color',
			}
		}
	],
	renderCSS: function(){  // TODO: figure out how to assemble needed CSS rules.  Must disregard SVG-specific inputs.
		let cssProperties = [];
		this.inputs.filter((el)=>el.css).forEach((el)=>{
			cssProperties.push(el.css.property)
		})
		console.log(cssProperties)
		return (`${this.hbSelectorRoot} { ${cssProperties.map(prop=>`${prop} : 'butt';`).join('\n')} }`)
	}
}

export default config