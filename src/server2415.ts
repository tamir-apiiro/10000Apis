
const express = require('express')
import {handler2415} from "./handler2415";
const app = express()
app.get('/2415', handler2415)
app.listen(3000, () => {})
        