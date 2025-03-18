
const express = require('express')
import {handler1267} from "./handler1267";
const app = express()
app.get('/1267', handler1267)
app.listen(3000, () => {})
        