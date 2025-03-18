
const express = require('express')
import {handler7689} from "./handler7689";
const app = express()
app.get('/7689', handler7689)
app.listen(3000, () => {})
        