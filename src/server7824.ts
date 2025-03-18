
const express = require('express')
import {handler7824} from "./handler7824";
const app = express()
app.get('/7824', handler7824)
app.listen(3000, () => {})
        