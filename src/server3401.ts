
const express = require('express')
import {handler3401} from "./handler3401";
const app = express()
app.get('/3401', handler3401)
app.listen(3000, () => {})
        