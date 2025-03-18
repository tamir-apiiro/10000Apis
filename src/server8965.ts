
const express = require('express')
import {handler8965} from "./handler8965";
const app = express()
app.get('/8965', handler8965)
app.listen(3000, () => {})
        