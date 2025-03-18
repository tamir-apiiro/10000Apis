
const express = require('express')
import {handler7455} from "./handler7455";
const app = express()
app.get('/7455', handler7455)
app.listen(3000, () => {})
        