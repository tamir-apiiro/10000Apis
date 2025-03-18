
const express = require('express')
import {handler311} from "./handler311";
const app = express()
app.get('/311', handler311)
app.listen(3000, () => {})
        