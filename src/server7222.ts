
const express = require('express')
import {handler7222} from "./handler7222";
const app = express()
app.get('/7222', handler7222)
app.listen(3000, () => {})
        