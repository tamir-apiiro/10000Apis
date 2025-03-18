
const express = require('express')
import {handler8990} from "./handler8990";
const app = express()
app.get('/8990', handler8990)
app.listen(3000, () => {})
        