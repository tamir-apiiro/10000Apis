
const express = require('express')
import {handler7785} from "./handler7785";
const app = express()
app.get('/7785', handler7785)
app.listen(3000, () => {})
        