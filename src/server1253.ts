
const express = require('express')
import {handler1253} from "./handler1253";
const app = express()
app.get('/1253', handler1253)
app.listen(3000, () => {})
        