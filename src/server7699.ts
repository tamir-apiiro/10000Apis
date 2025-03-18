
const express = require('express')
import {handler7699} from "./handler7699";
const app = express()
app.get('/7699', handler7699)
app.listen(3000, () => {})
        