
const express = require('express')
import {handler1297} from "./handler1297";
const app = express()
app.get('/1297', handler1297)
app.listen(3000, () => {})
        