
const express = require('express')
import {handler119} from "./handler119";
const app = express()
app.get('/119', handler119)
app.listen(3000, () => {})
        