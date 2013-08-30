( function($) {
	if ($ === undefined) throw new Error("jQuery not available");
	
	var submitButton = $("[data-name=quick-pay]").length > 0 ? $("[data-name=quick-pay]") : null,
		 nameField = $("[data-name=name]").length > 0 ? $("[name=name]") : null,
		 telField = $("[data-name=tel]").length > 0 ? $("[data-name=tel]") : null,
		 emailField = $("[data-name=email]").length > 0 ? $("[data-name=email]") : null,
		 postalField = $("[data-name=postal]").length > 0 ? $("[data-name=postal]") : null,
		 ccNumberField = $("[data-name=cc-num]").length > 0 ? $("[data-name=cc-num]") : null,
		 ccExpField = $("[data-name=cc-exp]").length > 0 ? $("[data-name=cc-exp]") : null,
		 ccCvv = $("[data-name=cc-cvv]").length > 0 ? $("[data-name=cc-cvv]") : null,
		 routingNumber = $("[data-name=routing-number]").length > 0 ? $("[data-name=routing-number]") : null,
		 accountNumber = $("[data-name=account-number]").length > 0 ? $("[data-name=account-number]") : null,
		 requiredField = $("[data-required=true]").length > 0 ? $("[data-required=true]") : null;
		 
	if(!submitButton) throw new Error("Could not find the submit button");
	
	submitButton.on("click", function(evt) {
		if(requiredField) {
			if (requiredField.val() === "") {
				requiredField.addClass("error");
				requiredField.each(function() {
					_placeToolTip($(this), {
						"message": "This field is required"
					});			
				});
			}
		}
	});
	
	$("[data-name]").on("blur", function(evt) {
		var relName = $(this).attr("data-name"),
			 tooltip = $("[rel=" + relName + "]").length > 0 ? $("[rel=" + relName + "]") : null;
		if(tooltip) {
			_removeToolTip(tooltip);
		}
		$(evt.target).removeClass("error");
	});
	
	var _placeToolTip = function(node, options) {
		var settings = $.extend({
			message: "There's an error with this field"
		}, options);
		var top = node.position().top,
			 left = node.offset().left,
			 width = node.outerWidth(),
			 height = node.outerHeight(),
			 pad = 3,
			 tooltip_top_position = top,
			 tooltip_left_position = left + width + pad,
		
			$tooltip = $("<span></span>");
			$tooltip.addClass("tooltip").attr("rel", node.attr("data-name")).text(settings.message).css("top", tooltip_top_position).css("left", tooltip_left_position);
		
		$("body").append($tooltip);
	}
	
	_removeToolTip = function(node) {
		node.fadeOut({
			"complete": node.remove(),
			"duration": 100
		})
	};
	
	
}(jQuery));