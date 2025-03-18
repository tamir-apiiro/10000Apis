
const express = require('express')
import {handler7235} from "./handler7235";
const app = express()
app.get('/7235', handler7235)
app.listen(3000, () => {})
        