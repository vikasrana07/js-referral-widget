(function() {
    document.addEventListener("DOMContentLoaded", function() {
        // Find the script tag explicitly
        const scriptTag = document.querySelector('script[src*="referralPopup.js"]');
        if (!scriptTag) return; 

        const placement = scriptTag.getAttribute("data-placement") || "right";
        const text = scriptTag.getAttribute("data-text") || "Refer And Earn";
        const textColor = scriptTag.getAttribute("data-text-color") || "#ffffff";
        const iconSrc = scriptTag.getAttribute("data-icon-src") || "";
        const bgColor = scriptTag.getAttribute("data-bg-color") || "#2f80ed";
        const borderRadius = scriptTag.getAttribute("data-border-radius") || "25px";
        const redirectURL = scriptTag.getAttribute("data-redirect-url") || "#";

        const popup = document.createElement("div");
        popup.style.position = "fixed";
        popup.style.bottom = "20px";
        popup.style[placement] = "20px";
        popup.style.background = bgColor;
        popup.style.color = textColor;
        popup.style.padding = "12px 20px";
        popup.style.borderRadius = borderRadius;
        popup.style.cursor = "pointer";
        popup.style.display = "flex";
        popup.style.alignItems = "center";
        popup.style.boxShadow = "0px 4px 8px rgba(0,0,0,0.2)";
        popup.style.fontFamily = "Arial, sans-serif";
        popup.style.fontSize = "16px";
        popup.style.fontWeight = "600";
        popup.style.zIndex = "9999";
        popup.style.transition = "transform 0.2s ease-in-out";

        // Hover effect
        popup.addEventListener("mouseenter", () => {
            popup.style.transform = "scale(1.05)";
        });
        popup.addEventListener("mouseleave", () => {
            popup.style.transform = "scale(1)";
        });

        // Add icon if provided
        if (iconSrc) {
            const icon = document.createElement("img");
            icon.src = iconSrc;
            icon.style.width = "24px";
            icon.style.height = "24px";
            icon.style.marginRight = "10px";
            icon.style.borderRadius = "5px";
            popup.appendChild(icon);
        }

        // Add text
        const textElement = document.createElement("span");
        textElement.textContent = text;
        textElement.style.color = textColor;
        popup.appendChild(textElement);

        // Click event
        popup.addEventListener("click", () => {
            window.location.href = redirectURL;
        });

        // Append to body
        document.body.appendChild(popup);
    });
})();
