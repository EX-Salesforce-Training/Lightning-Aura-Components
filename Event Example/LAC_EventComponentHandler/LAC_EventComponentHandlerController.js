({
	HandleAppEvent : function(component, event, helper) {
        // We get the parameter storing information from the event.
        // Not all events may have parameters, we might just want to do something 
        // when something else happens.
		let message = event.getParam("Bob");
        // We store the value from the event inside the attribute of Bob.
        component.set("v.Bob", message);
	}
})