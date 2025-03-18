
const express = require('express')
import {handler7965} from "./handler7965";
const app = express()
app.get('/7965', handler7965)
app.listen(3000, () => {})
        