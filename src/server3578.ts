
const express = require('express')
import {handler3578} from "./handler3578";
const app = express()
app.get('/3578', handler3578)
app.listen(3000, () => {})
        