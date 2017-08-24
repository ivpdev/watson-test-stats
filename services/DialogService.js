const WatsonConversationService = require('../services/WatsonConversationService')

const DialogService = {
	tell: function(msg, context) {
		var self = this;

		return WatsonConversationService
    		.sendMessage(msg, context)
    		.then(watsonResponse => self._resolveWatsonResponse(watsonResponse))},

	_resolveWatsonResponse: function(watsonResponse) {
		    return {
                text: watsonResponse.output.text[0],
                context: watsonResponse.context }}}

module.exports = DialogService;