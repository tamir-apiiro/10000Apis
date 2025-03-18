
const express = require('express')
import {handler8145} from "./handler8145";
const app = express()
app.get('/8145', handler8145)
app.listen(3000, () => {})
        