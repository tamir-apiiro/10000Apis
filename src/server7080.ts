
const express = require('express')
import {handler7080} from "./handler7080";
const app = express()
app.get('/7080', handler7080)
app.listen(3000, () => {})
        