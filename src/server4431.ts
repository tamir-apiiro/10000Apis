
const express = require('express')
import {handler4431} from "./handler4431";
const app = express()
app.get('/4431', handler4431)
app.listen(3000, () => {})
        