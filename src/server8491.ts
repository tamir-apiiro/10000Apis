
const express = require('express')
import {handler8491} from "./handler8491";
const app = express()
app.get('/8491', handler8491)
app.listen(3000, () => {})
        