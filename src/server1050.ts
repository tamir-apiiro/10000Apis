
const express = require('express')
import {handler1050} from "./handler1050";
const app = express()
app.get('/1050', handler1050)
app.listen(3000, () => {})
        