
const express = require('express')
import {handler2201} from "./handler2201";
const app = express()
app.get('/2201', handler2201)
app.listen(3000, () => {})
        