// function displayBrowserInfo() {
           var newDiv = document.createElement("div");
newDiv.id="browserInfoDiv";
            // Retrieve browser information
            var browserName = navigator.appName;
            var browserVersion = navigator.appVersion;

            // Update the div with browser information
            newDiv.textContent = "You are using " + browserName + " version " + browserVersion;
	document.body.appendChild(newDiv);
        