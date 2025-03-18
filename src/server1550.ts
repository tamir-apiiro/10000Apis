
const express = require('express')
import {handler1550} from "./handler1550";
const app = express()
app.get('/1550', handler1550)
app.listen(3000, () => {})
        