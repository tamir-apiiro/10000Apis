
const express = require('express')
import {handler8202} from "./handler8202";
const app = express()
app.get('/8202', handler8202)
app.listen(3000, () => {})
        