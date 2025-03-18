
const express = require('express')
import {handler495} from "./handler495";
const app = express()
app.get('/495', handler495)
app.listen(3000, () => {})
        