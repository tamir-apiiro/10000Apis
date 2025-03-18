
const express = require('express')
import {handler3273} from "./handler3273";
const app = express()
app.get('/3273', handler3273)
app.listen(3000, () => {})
        