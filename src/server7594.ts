
const express = require('express')
import {handler7594} from "./handler7594";
const app = express()
app.get('/7594', handler7594)
app.listen(3000, () => {})
        