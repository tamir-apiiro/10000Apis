
const express = require('express')
import {handler8310} from "./handler8310";
const app = express()
app.get('/8310', handler8310)
app.listen(3000, () => {})
        