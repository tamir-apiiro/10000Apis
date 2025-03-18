
const express = require('express')
import {handler8548} from "./handler8548";
const app = express()
app.get('/8548', handler8548)
app.listen(3000, () => {})
        