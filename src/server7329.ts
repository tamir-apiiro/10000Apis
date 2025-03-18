
const express = require('express')
import {handler7329} from "./handler7329";
const app = express()
app.get('/7329', handler7329)
app.listen(3000, () => {})
        