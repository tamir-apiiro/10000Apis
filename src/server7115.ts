
const express = require('express')
import {handler7115} from "./handler7115";
const app = express()
app.get('/7115', handler7115)
app.listen(3000, () => {})
        