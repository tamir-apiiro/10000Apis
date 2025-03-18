
const express = require('express')
import {handler1594} from "./handler1594";
const app = express()
app.get('/1594', handler1594)
app.listen(3000, () => {})
        