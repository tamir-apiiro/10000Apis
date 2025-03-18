
const express = require('express')
import {handler7212} from "./handler7212";
const app = express()
app.get('/7212', handler7212)
app.listen(3000, () => {})
        