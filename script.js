// Store both image paths
const normalImg = "img/icon.png";
const laughImg = "img/icon_laugh.png";

// Add event listener after DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Get the image element
  const profileImg = document.getElementById("profileImg");

  // Add hover event listeners
  profileImg.addEventListener("mouseenter", () => {
    profileImg.src = laughImg;
  });

  profileImg.addEventListener("mouseleave", () => {
    profileImg.src = normalImg;
  });
  // Add click event listener
  profileImg.addEventListener("click", () => {
    if (profileImg.src.includes("icon.png")) {
      profileImg.src = laughImg;
    } else {
      profileImg.src = normalImg;
    }
  });
});
