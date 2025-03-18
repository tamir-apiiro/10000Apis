
const express = require('express')
import {handler7598} from "./handler7598";
const app = express()
app.get('/7598', handler7598)
app.listen(3000, () => {})
        