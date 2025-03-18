
const express = require('express')
import {handler3815} from "./handler3815";
const app = express()
app.get('/3815', handler3815)
app.listen(3000, () => {})
        