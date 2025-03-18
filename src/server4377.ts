
const express = require('express')
import {handler4377} from "./handler4377";
const app = express()
app.get('/4377', handler4377)
app.listen(3000, () => {})
        