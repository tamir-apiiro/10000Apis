
const express = require('express')
import {handler1115} from "./handler1115";
const app = express()
app.get('/1115', handler1115)
app.listen(3000, () => {})
        