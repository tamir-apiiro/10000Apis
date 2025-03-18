
const express = require('express')
import {handler2699} from "./handler2699";
const app = express()
app.get('/2699', handler2699)
app.listen(3000, () => {})
        