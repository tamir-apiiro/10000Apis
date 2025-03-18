
const express = require('express')
import {handler7715} from "./handler7715";
const app = express()
app.get('/7715', handler7715)
app.listen(3000, () => {})
        