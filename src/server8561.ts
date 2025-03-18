
const express = require('express')
import {handler8561} from "./handler8561";
const app = express()
app.get('/8561', handler8561)
app.listen(3000, () => {})
        