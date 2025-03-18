
const express = require('express')
import {handler2212} from "./handler2212";
const app = express()
app.get('/2212', handler2212)
app.listen(3000, () => {})
        