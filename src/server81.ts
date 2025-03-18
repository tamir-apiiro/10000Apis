
const express = require('express')
import {handler81} from "./handler81";
const app = express()
app.get('/81', handler81)
app.listen(3000, () => {})
        