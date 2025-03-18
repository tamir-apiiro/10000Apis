
const express = require('express')
import {handler7283} from "./handler7283";
const app = express()
app.get('/7283', handler7283)
app.listen(3000, () => {})
        