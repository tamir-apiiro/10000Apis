
const express = require('express')
import {handler8047} from "./handler8047";
const app = express()
app.get('/8047', handler8047)
app.listen(3000, () => {})
        