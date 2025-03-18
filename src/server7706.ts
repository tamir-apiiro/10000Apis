
const express = require('express')
import {handler7706} from "./handler7706";
const app = express()
app.get('/7706', handler7706)
app.listen(3000, () => {})
        