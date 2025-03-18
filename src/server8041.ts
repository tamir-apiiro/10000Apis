
const express = require('express')
import {handler8041} from "./handler8041";
const app = express()
app.get('/8041', handler8041)
app.listen(3000, () => {})
        