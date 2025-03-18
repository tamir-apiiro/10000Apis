
const express = require('express')
import {handler8140} from "./handler8140";
const app = express()
app.get('/8140', handler8140)
app.listen(3000, () => {})
        