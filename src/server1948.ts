
const express = require('express')
import {handler1948} from "./handler1948";
const app = express()
app.get('/1948', handler1948)
app.listen(3000, () => {})
        