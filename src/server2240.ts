
const express = require('express')
import {handler2240} from "./handler2240";
const app = express()
app.get('/2240', handler2240)
app.listen(3000, () => {})
        