
const express = require('express')
import {handler2944} from "./handler2944";
const app = express()
app.get('/2944', handler2944)
app.listen(3000, () => {})
        