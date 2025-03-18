
const express = require('express')
import {handler8307} from "./handler8307";
const app = express()
app.get('/8307', handler8307)
app.listen(3000, () => {})
        