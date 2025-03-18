
const express = require('express')
import {handler3472} from "./handler3472";
const app = express()
app.get('/3472', handler3472)
app.listen(3000, () => {})
        