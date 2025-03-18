
const express = require('express')
import {handler2001} from "./handler2001";
const app = express()
app.get('/2001', handler2001)
app.listen(3000, () => {})
        