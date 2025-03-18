
const express = require('express')
import {handler7609} from "./handler7609";
const app = express()
app.get('/7609', handler7609)
app.listen(3000, () => {})
        