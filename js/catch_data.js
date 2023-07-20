var returnArray = []
fetch('https://object-web.blue-protocol.com/news.json?ver=f58ae37e3346c951fccaf75ca4e67a16c31e60813aaccd0116a4eac7f121b12d')
.then(response => response.json())
.then(data => {
    returnArray = data
    writeG()
})
.catch(error => {
    writeG()
});