const reels = [
    {
        link: "https://www.instagram.com/reel/DAwkIDoyK2u/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        title: "Reel 1"
    },
    {
        link: "https://www.instagram.com/reel/DAtRsglRlLQy45SC_NAtFcVrm8tjNnBZu07m-U0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        title: "Reel 2"
    },
    {
        link: "https://www.instagram.com/reel/DAmRYXCgYP6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
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
