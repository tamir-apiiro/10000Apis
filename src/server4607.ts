
const express = require('express')
import {handler4607} from "./handler4607";
const app = express()
app.get('/4607', handler4607)
app.listen(3000, () => {})
        