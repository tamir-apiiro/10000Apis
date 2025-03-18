
const express = require('express')
import {handler2074} from "./handler2074";
const app = express()
app.get('/2074', handler2074)
app.listen(3000, () => {})
        