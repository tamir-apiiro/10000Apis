
const express = require('express')
import {handler87} from "./handler87";
const app = express()
app.get('/87', handler87)
app.listen(3000, () => {})
        