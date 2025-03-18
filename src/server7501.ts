
const express = require('express')
import {handler7501} from "./handler7501";
const app = express()
app.get('/7501', handler7501)
app.listen(3000, () => {})
        