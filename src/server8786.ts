
const express = require('express')
import {handler8786} from "./handler8786";
const app = express()
app.get('/8786', handler8786)
app.listen(3000, () => {})
        