
const express = require('express')
import {handler250} from "./handler250";
const app = express()
app.get('/250', handler250)
app.listen(3000, () => {})
        