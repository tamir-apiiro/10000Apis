
const express = require('express')
import {handler7074} from "./handler7074";
const app = express()
app.get('/7074', handler7074)
app.listen(3000, () => {})
        