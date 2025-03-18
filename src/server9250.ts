
const express = require('express')
import {handler9250} from "./handler9250";
const app = express()
app.get('/9250', handler9250)
app.listen(3000, () => {})
        