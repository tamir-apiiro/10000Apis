
const express = require('express')
import {handler7567} from "./handler7567";
const app = express()
app.get('/7567', handler7567)
app.listen(3000, () => {})
        