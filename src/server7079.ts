
const express = require('express')
import {handler7079} from "./handler7079";
const app = express()
app.get('/7079', handler7079)
app.listen(3000, () => {})
        