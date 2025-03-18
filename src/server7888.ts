
const express = require('express')
import {handler7888} from "./handler7888";
const app = express()
app.get('/7888', handler7888)
app.listen(3000, () => {})
        