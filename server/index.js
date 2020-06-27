const express = require('express');

// const dataCtrl = require('./controllers/dataCtrl');
const woodsCtrl = require('./controllers/woodsCtrl');
// const truckCtrl = require('./controller/truckCtrl');
const app = express();

app.use(express.json());


app.get('/api/campG', woodsCtrl.getCampG);
// app.post('/api/campG', truckCtrl.reviewCampG);
// app.put('/api/campG', truckCtrl.editCampG);
// app.delete('/api/campG', truckCtrl.deleteCampG);




app.listen(4545, () => console.log('Server rollin on 4545'))