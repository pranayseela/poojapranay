const reels = [
    {
        link: "https://www.instagram.com/reel/EXAMPLE1/embed/",
        title: "Reel 1"
    },
    {
        link: "https://www.instagram.com/reel/EXAMPLE2/embed/",
        title: "Reel 2"
    },
    {
        link: "https://www.instagram.com/reel/EXAMPLE3/embed/",
        title: "Reel 3"
    }
];

const reelGrid = document.getElementById('reel-grid');

reels.forEach(reel => {
    const reelDiv = document.createElement('div');
    reelDiv.classList.add('reel');

    const iframe = document.createElement('iframe');
    iframe.src = reel.link;
    iframe.title = reel.title;

    reelDiv.appendChild(iframe);
    reelGrid.appendChild(reelDiv);
});
