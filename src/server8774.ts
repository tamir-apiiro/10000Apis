
const express = require('express')
import {handler8774} from "./handler8774";
const app = express()
app.get('/8774', handler8774)
app.listen(3000, () => {})
        