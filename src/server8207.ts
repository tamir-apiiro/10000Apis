
const express = require('express')
import {handler8207} from "./handler8207";
const app = express()
app.get('/8207', handler8207)
app.listen(3000, () => {})
        