
const express = require('express')
import {handler267} from "./handler267";
const app = express()
app.get('/267', handler267)
app.listen(3000, () => {})
        