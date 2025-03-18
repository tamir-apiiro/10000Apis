
const express = require('express')
import {handler7273} from "./handler7273";
const app = express()
app.get('/7273', handler7273)
app.listen(3000, () => {})
        