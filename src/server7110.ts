
const express = require('express')
import {handler7110} from "./handler7110";
const app = express()
app.get('/7110', handler7110)
app.listen(3000, () => {})
        