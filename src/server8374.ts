
const express = require('express')
import {handler8374} from "./handler8374";
const app = express()
app.get('/8374', handler8374)
app.listen(3000, () => {})
        