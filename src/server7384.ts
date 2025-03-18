
const express = require('express')
import {handler7384} from "./handler7384";
const app = express()
app.get('/7384', handler7384)
app.listen(3000, () => {})
        