
const express = require('express')
import {handler8218} from "./handler8218";
const app = express()
app.get('/8218', handler8218)
app.listen(3000, () => {})
        