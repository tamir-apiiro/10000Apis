
const express = require('express')
import {handler8365} from "./handler8365";
const app = express()
app.get('/8365', handler8365)
app.listen(3000, () => {})
        