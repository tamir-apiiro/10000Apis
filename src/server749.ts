
const express = require('express')
import {handler749} from "./handler749";
const app = express()
app.get('/749', handler749)
app.listen(3000, () => {})
        