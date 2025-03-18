
const express = require('express')
import {handler2273} from "./handler2273";
const app = express()
app.get('/2273', handler2273)
app.listen(3000, () => {})
        