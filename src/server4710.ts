
const express = require('express')
import {handler4710} from "./handler4710";
const app = express()
app.get('/4710', handler4710)
app.listen(3000, () => {})
        