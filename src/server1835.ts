
const express = require('express')
import {handler1835} from "./handler1835";
const app = express()
app.get('/1835', handler1835)
app.listen(3000, () => {})
        