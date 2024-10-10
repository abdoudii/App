const videoContainer = document.getElementById('video-container');
const coverVideo = document.getElementById('cover-video');


coverVideo.addEventListener('ended', () => {
    videoContainer.style.display = 'none'; // Hide the video container when the video ends
});
function checkAll() {
    const checkboxes = document.querySelectorAll('.withdraw-check input[type="checkbox"]');
    const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);

    if (allChecked) {
        videoContainer.style.display = 'flex'; // Show the video container
        coverVideo.play(); 
    }
}

// Attach event listener to each checkbox
const checkboxes = document.querySelectorAll('.withdraw-check input[type="checkbox"]');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', checkAll);
});