
const express = require('express')
import {handler1637} from "./handler1637";
const app = express()
app.get('/1637', handler1637)
app.listen(3000, () => {})
        