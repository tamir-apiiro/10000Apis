
const express = require('express')
import {handler7314} from "./handler7314";
const app = express()
app.get('/7314', handler7314)
app.listen(3000, () => {})
        