
const express = require('express')
import {handler8684} from "./handler8684";
const app = express()
app.get('/8684', handler8684)
app.listen(3000, () => {})
        