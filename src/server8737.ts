
const express = require('express')
import {handler8737} from "./handler8737";
const app = express()
app.get('/8737', handler8737)
app.listen(3000, () => {})
        