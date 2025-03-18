
const express = require('express')
import {handler7524} from "./handler7524";
const app = express()
app.get('/7524', handler7524)
app.listen(3000, () => {})
        