
const express = require('express')
import {handler1749} from "./handler1749";
const app = express()
app.get('/1749', handler1749)
app.listen(3000, () => {})
        