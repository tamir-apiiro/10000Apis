
const express = require('express')
import {handler479} from "./handler479";
const app = express()
app.get('/479', handler479)
app.listen(3000, () => {})
        