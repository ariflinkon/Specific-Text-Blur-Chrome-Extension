// Function to unhide text
function unhideHiddenText() {
    // Select elements containing hidden text
    const hiddenElements = document.querySelectorAll('[class*="hidden"], [style*="visibility:hidden"], [style*="opacity:0"], [style*="display:none"]');
    
    hiddenElements.forEach((el) => {
        // Remove inline styles that hide text
        el.style.visibility = "visible";
        el.style.opacity = "1";
        el.style.display = "block";

        // Attempt to unmask sensitive text
        if (el.textContent.includes("****")) {
            el.textContent = el.getAttribute('data-ssn') || el.textContent.replace(/\*/g, '0'); // Replace as needed
        }
    });

    console.log("Unhidden elements updated.");
}

// Run the function when the content script is loaded
unhideHiddenText();
