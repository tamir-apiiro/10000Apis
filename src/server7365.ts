
const express = require('express')
import {handler7365} from "./handler7365";
const app = express()
app.get('/7365', handler7365)
app.listen(3000, () => {})
        