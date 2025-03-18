
const express = require('express')
import {handler7985} from "./handler7985";
const app = express()
app.get('/7985', handler7985)
app.listen(3000, () => {})
        