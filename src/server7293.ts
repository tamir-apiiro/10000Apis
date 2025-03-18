
const express = require('express')
import {handler7293} from "./handler7293";
const app = express()
app.get('/7293', handler7293)
app.listen(3000, () => {})
        