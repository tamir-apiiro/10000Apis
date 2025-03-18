
const express = require('express')
import {handler3138} from "./handler3138";
const app = express()
app.get('/3138', handler3138)
app.listen(3000, () => {})
        