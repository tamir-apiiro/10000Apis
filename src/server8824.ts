
const express = require('express')
import {handler8824} from "./handler8824";
const app = express()
app.get('/8824', handler8824)
app.listen(3000, () => {})
        