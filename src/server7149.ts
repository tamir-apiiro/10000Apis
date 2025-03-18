
const express = require('express')
import {handler7149} from "./handler7149";
const app = express()
app.get('/7149', handler7149)
app.listen(3000, () => {})
        