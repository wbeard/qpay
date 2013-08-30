var csi = {

	csiConfig : {
		ciid: '99999999',
		ck:  'this will be a value for authorization',
		csiHook: {
			service: {
				url: "https://secure.collectorsolutions.com/csi_ecollections_portal_ui/vtentry.aspx"
			},
			ui: {
				url: "https://secure.collectorsolutions.com/csi_ecollections_portal_ui/interchange.aspx?",
				ciid: '99999999',
				ste: '5'
			}
		},
		prehook: {
			url: null,
			data: {
				name: "name"
			}
		},
		posthook: {
			url: "https://thing.com/post"
		},
		returnToUrl: {
			url: "https://thing.com/return"
		},
		paymentDefaults: {
			collectionMode: 1,
			userId: 1
		}
	}
	
};