
const express = require('express')
import {handler7311} from "./handler7311";
const app = express()
app.get('/7311', handler7311)
app.listen(3000, () => {})
        