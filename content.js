// Function to unhide text
function unhideHiddenText() {
    // Select elements containing hidden text
    const hiddenElements = document.querySelectorAll('[class*="hidden"], [style*="visibility:hidden"], [style*="opacity:0"], [style*="display:none"]');
    
    hiddenElements.forEach((el) => {
        // Remove inline styles that hide text
        el.style.visibility = "visible";
        el.style.opacity = "1";
        
        // Only set display to block if it was originally none
        if (getComputedStyle(el).display === "none") {
            el.style.display = "block";
        }

        // Attempt to unmask sensitive text
        if (el.textContent.includes("****")) {
            const ssn = el.getAttribute('data-ssn');
            el.textContent = ssn ? ssn : el.textContent.replace(/\*/g, '0'); // Replace as needed
        }
    });

    console.log("Unhidden elements updated.");
}

// Run the function when the content script is loaded
unhideHiddenText();