
const express = require('express')
import {handler985} from "./handler985";
const app = express()
app.get('/985', handler985)
app.listen(3000, () => {})
        