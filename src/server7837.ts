
const express = require('express')
import {handler7837} from "./handler7837";
const app = express()
app.get('/7837', handler7837)
app.listen(3000, () => {})
        