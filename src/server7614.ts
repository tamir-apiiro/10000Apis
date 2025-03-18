
const express = require('express')
import {handler7614} from "./handler7614";
const app = express()
app.get('/7614', handler7614)
app.listen(3000, () => {})
        