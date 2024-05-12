// Add style to make the control bar transparent
const style = document.createElement('style');
style.textContent = `
    .video-js .vjs-control-bar {
        background-color: rgba(0, 0, 0, 0) !important; /* Transparent background */
    }
`;
document.head.appendChild(style);
