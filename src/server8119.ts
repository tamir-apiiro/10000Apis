
const express = require('express')
import {handler8119} from "./handler8119";
const app = express()
app.get('/8119', handler8119)
app.listen(3000, () => {})
        