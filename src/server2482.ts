
const express = require('express')
import {handler2482} from "./handler2482";
const app = express()
app.get('/2482', handler2482)
app.listen(3000, () => {})
        