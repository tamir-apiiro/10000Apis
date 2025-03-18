
const express = require('express')
import {handler2123} from "./handler2123";
const app = express()
app.get('/2123', handler2123)
app.listen(3000, () => {})
        