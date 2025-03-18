
const express = require('express')
import {handler8382} from "./handler8382";
const app = express()
app.get('/8382', handler8382)
app.listen(3000, () => {})
        