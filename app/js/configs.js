module.exports = {	
	
	temp: null,

	general: {
		lenguage: 	()=> { temp['locale'] = event.target.value },		
		close: 		()=> { temp['exit_without_ask'] = !event.target.checked },
		minimize: 	()=> { temp['exit_forced'] = event.target.checked },
		theme: 		()=> { temp['theme'] = event.target.value }
	},

	gui: {
		open: ()=> {
			temp = []
			$('#modal_configs').modal('toggle')
		},
	
		save: ()=> {
			for (config in temp) {
				settings[config] = temp[config]
			}
			
			ipcRenderer.send('settings', settings)

			// TODO: Storage
		},

	}

}