
const express = require('express')
import {handler8702} from "./handler8702";
const app = express()
app.get('/8702', handler8702)
app.listen(3000, () => {})
        