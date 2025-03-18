
const express = require('express')
import {handler8874} from "./handler8874";
const app = express()
app.get('/8874', handler8874)
app.listen(3000, () => {})
        