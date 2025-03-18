
const express = require('express')
import {handler7357} from "./handler7357";
const app = express()
app.get('/7357', handler7357)
app.listen(3000, () => {})
        