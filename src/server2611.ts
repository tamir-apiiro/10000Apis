
const express = require('express')
import {handler2611} from "./handler2611";
const app = express()
app.get('/2611', handler2611)
app.listen(3000, () => {})
        