
const express = require('express')
import {handler8746} from "./handler8746";
const app = express()
app.get('/8746', handler8746)
app.listen(3000, () => {})
        