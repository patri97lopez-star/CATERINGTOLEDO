import https from 'https';

https.get('https://www.grupoaquiles.es/', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    // try finding slider images
    const revSliderMatches = data.match(/data-bg="([^"]+)"/gi);
    console.log("Slider bgs:");
    if (revSliderMatches) {
        revSliderMatches.forEach(match => console.log(match));
    }
    
    // search for duck or pavo or pato
    const everythingMatches = data.match(/https:\/\/[^"'\s]+\/[^"'\s]+\.(?:jpg|jpeg|png)/gi);
    if (everythingMatches) {
        const unique = [...new Set(everythingMatches)];
        console.log("All Links:");
        unique.forEach(match => console.log(match));
    }
  });
});
