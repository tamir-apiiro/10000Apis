
const express = require('express')
import {handler8985} from "./handler8985";
const app = express()
app.get('/8985', handler8985)
app.listen(3000, () => {})
        