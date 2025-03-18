
const express = require('express')
import {handler2260} from "./handler2260";
const app = express()
app.get('/2260', handler2260)
app.listen(3000, () => {})
        