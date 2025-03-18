
const express = require('express')
import {handler7370} from "./handler7370";
const app = express()
app.get('/7370', handler7370)
app.listen(3000, () => {})
        