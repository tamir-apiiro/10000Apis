
const express = require('express')
import {handler8005} from "./handler8005";
const app = express()
app.get('/8005', handler8005)
app.listen(3000, () => {})
        