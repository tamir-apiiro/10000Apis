
const express = require('express')
import {handler2478} from "./handler2478";
const app = express()
app.get('/2478', handler2478)
app.listen(3000, () => {})
        