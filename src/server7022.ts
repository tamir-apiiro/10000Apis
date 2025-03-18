
const express = require('express')
import {handler7022} from "./handler7022";
const app = express()
app.get('/7022', handler7022)
app.listen(3000, () => {})
        