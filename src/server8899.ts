
const express = require('express')
import {handler8899} from "./handler8899";
const app = express()
app.get('/8899', handler8899)
app.listen(3000, () => {})
        