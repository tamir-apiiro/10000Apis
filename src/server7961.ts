
const express = require('express')
import {handler7961} from "./handler7961";
const app = express()
app.get('/7961', handler7961)
app.listen(3000, () => {})
        