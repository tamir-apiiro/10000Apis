
const express = require('express')
import {handler2172} from "./handler2172";
const app = express()
app.get('/2172', handler2172)
app.listen(3000, () => {})
        