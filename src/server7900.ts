
const express = require('express')
import {handler7900} from "./handler7900";
const app = express()
app.get('/7900', handler7900)
app.listen(3000, () => {})
        