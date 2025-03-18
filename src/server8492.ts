
const express = require('express')
import {handler8492} from "./handler8492";
const app = express()
app.get('/8492', handler8492)
app.listen(3000, () => {})
        