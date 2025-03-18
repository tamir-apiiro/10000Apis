
const express = require('express')
import {handler7547} from "./handler7547";
const app = express()
app.get('/7547', handler7547)
app.listen(3000, () => {})
        