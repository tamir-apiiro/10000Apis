
const express = require('express')
import {handler8256} from "./handler8256";
const app = express()
app.get('/8256', handler8256)
app.listen(3000, () => {})
        