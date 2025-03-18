
const express = require('express')
import {handler1123} from "./handler1123";
const app = express()
app.get('/1123', handler1123)
app.listen(3000, () => {})
        