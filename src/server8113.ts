
const express = require('express')
import {handler8113} from "./handler8113";
const app = express()
app.get('/8113', handler8113)
app.listen(3000, () => {})
        