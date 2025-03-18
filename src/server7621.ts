
const express = require('express')
import {handler7621} from "./handler7621";
const app = express()
app.get('/7621', handler7621)
app.listen(3000, () => {})
        