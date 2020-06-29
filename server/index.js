const express = require('express');
const cors = require('cors');
const woodsCtrl = require('./controllers/woodsCtrl');
// const truckCtrl = require('./controller/truckCtrl');
const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/campG', woodsCtrl.getCampG);
app.get('/api/campG/:id', woodsCtrl.getOneCampG);
app.post('/api/campG', woodsCtrl.addCampG);
app.put('/api/campG/:id', woodsCtrl.updateReview);
app.delete('/api/campG/:id', woodsCtrl.deleteCampG);




app.listen(4545, () => console.log('Server rollin on 4545'))