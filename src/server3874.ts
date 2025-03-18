
const express = require('express')
import {handler3874} from "./handler3874";
const app = express()
app.get('/3874', handler3874)
app.listen(3000, () => {})
        