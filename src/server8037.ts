
const express = require('express')
import {handler8037} from "./handler8037";
const app = express()
app.get('/8037', handler8037)
app.listen(3000, () => {})
        