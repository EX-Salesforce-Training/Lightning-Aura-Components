({
	doInit : function(component, event, helper) {
		let kingdom = component.get("c.GetPlayerKingdom");
        kingdom.setCallback(this, function(response) {
            let state = response.getState();
            if(state === "SUCCESS") {
                component.set("v.kingdom", response.getReturnValue());
            }
        })
        $A.enqueueAction(kingdom);
	}
})