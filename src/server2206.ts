
const express = require('express')
import {handler2206} from "./handler2206";
const app = express()
app.get('/2206', handler2206)
app.listen(3000, () => {})
        