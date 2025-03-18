
const express = require('express')
import {handler774} from "./handler774";
const app = express()
app.get('/774', handler774)
app.listen(3000, () => {})
        