
const express = require('express')
import {handler8699} from "./handler8699";
const app = express()
app.get('/8699', handler8699)
app.listen(3000, () => {})
        