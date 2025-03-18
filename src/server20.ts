
const express = require('express')
import {handler20} from "./handler20";
const app = express()
app.get('/20', handler20)
app.listen(3000, () => {})
        