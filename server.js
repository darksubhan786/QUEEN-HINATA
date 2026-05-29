const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('QUEEN HINATA SERVER IS RUNNING');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
