const express = require('express');
const dataCtrl = require('./controllers/dataCtrl');
const woodsCtrl = require('./controllers/woodsCtrl');
const truckCtrl = require('./controllers/truckCtrl');
const app = express();

app.use(express.json());


app.get('/api/campG', truckCtrl.getCampG);
app.post('/api/campG', truckCtrl.reviewCampG);
app.put('/api/campG', truckCtrl.editCampG);
app.delete('/api/campG', truckCtrl.deleteCampG);




app.listen(4545, () => console.log('Server rollin on 4545'))