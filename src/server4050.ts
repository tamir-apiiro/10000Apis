
const express = require('express')
import {handler4050} from "./handler4050";
const app = express()
app.get('/4050', handler4050)
app.listen(3000, () => {})
        