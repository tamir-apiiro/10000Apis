
const express = require('express')
import {handler2389} from "./handler2389";
const app = express()
app.get('/2389', handler2389)
app.listen(3000, () => {})
        