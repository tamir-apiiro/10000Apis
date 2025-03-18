
const express = require('express')
import {handler130} from "./handler130";
const app = express()
app.get('/130', handler130)
app.listen(3000, () => {})
        