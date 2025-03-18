
const express = require('express')
import {handler3384} from "./handler3384";
const app = express()
app.get('/3384', handler3384)
app.listen(3000, () => {})
        