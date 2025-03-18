
const express = require('express')
import {handler612} from "./handler612";
const app = express()
app.get('/612', handler612)
app.listen(3000, () => {})
        