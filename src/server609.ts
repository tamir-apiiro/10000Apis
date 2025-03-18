
const express = require('express')
import {handler609} from "./handler609";
const app = express()
app.get('/609', handler609)
app.listen(3000, () => {})
        