
const express = require('express')
import {handler4495} from "./handler4495";
const app = express()
app.get('/4495', handler4495)
app.listen(3000, () => {})
        