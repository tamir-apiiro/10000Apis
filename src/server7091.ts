
const express = require('express')
import {handler7091} from "./handler7091";
const app = express()
app.get('/7091', handler7091)
app.listen(3000, () => {})
        