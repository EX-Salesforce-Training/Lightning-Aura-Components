({
	show : function(component, event, helper) {
        // We get the current state.
		let boolCheck = component.get("v.display");
        // We swap it to the opposite state
        component.set("v.display", !boolCheck);
        component.set("v.display2", boolCheck); 
	},
    
    handleSelect : function (cmp, event) {
        // This will contain the index (position) of the selected lightning:menuItem
        let selectedMenuItemValue = event.getParam("value");
        // Find all menu items
        let menuItems = cmp.find("menuItems");
        // Iterate over items to set them false
        for(let item of menuItems){
            item.set("v.checked", false);
        }
        // Get the selected menu item
        let menuItem = menuItems.find(function(menuItem) {
            
            return menuItem.get("v.value") === selectedMenuItemValue;
        });
        // Toggle the existing checked value, if it was true, it will be set to false, and vice-versa
        menuItem.set("v.checked", !menuItem.get("v.checked"));
        // Update the text value to reflect selection
        cmp.set("v.rim", menuItem.get("v.value"));
	}
})