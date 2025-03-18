
const express = require('express')
import {handler756} from "./handler756";
const app = express()
app.get('/756', handler756)
app.listen(3000, () => {})
        