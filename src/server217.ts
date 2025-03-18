
const express = require('express')
import {handler217} from "./handler217";
const app = express()
app.get('/217', handler217)
app.listen(3000, () => {})
        