
const express = require('express')
import {handler8630} from "./handler8630";
const app = express()
app.get('/8630', handler8630)
app.listen(3000, () => {})
        