
const express = require('express')
import {handler7891} from "./handler7891";
const app = express()
app.get('/7891', handler7891)
app.listen(3000, () => {})
        