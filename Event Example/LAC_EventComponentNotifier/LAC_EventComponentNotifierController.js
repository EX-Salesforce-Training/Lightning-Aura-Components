({
	FireAppEvent : function(component, event, helper) {
        // This gets the event, essentially instantiating it.
        let appEvent= $A.get("e.c:LAC_EventAppEvent");
        // We provide the parameter used in the event.
        appEvent.setParams({"Bob":"App Event Fired"});
        // We fire the event.
        appEvent.fire();
	}
})