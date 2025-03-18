
const express = require('express')
import {handler7876} from "./handler7876";
const app = express()
app.get('/7876', handler7876)
app.listen(3000, () => {})
        