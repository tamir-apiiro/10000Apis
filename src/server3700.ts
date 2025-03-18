
const express = require('express')
import {handler3700} from "./handler3700";
const app = express()
app.get('/3700', handler3700)
app.listen(3000, () => {})
        