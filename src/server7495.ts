
const express = require('express')
import {handler7495} from "./handler7495";
const app = express()
app.get('/7495', handler7495)
app.listen(3000, () => {})
        