
const express = require('express')
import {handler2985} from "./handler2985";
const app = express()
app.get('/2985', handler2985)
app.listen(3000, () => {})
        