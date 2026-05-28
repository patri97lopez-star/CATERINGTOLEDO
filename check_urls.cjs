const https = require('https');

const urls = [
  'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1414235077428-33898bd12285?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1505934333218-8fe21ff8cece?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1473093225043-7dd81ce52c84?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1000&q=80'
];

urls.forEach(url => {
  https.get(url, (res) => {
    console.log(`URL: ${url} - Status: ${res.statusCode}`);
  }).on('error', (e) => {
    console.error(`Error: ${e.message}`);
  });
});
