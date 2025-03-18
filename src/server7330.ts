
const express = require('express')
import {handler7330} from "./handler7330";
const app = express()
app.get('/7330', handler7330)
app.listen(3000, () => {})
        