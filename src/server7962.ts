
const express = require('express')
import {handler7962} from "./handler7962";
const app = express()
app.get('/7962', handler7962)
app.listen(3000, () => {})
        