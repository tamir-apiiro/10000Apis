
const express = require('express')
import {handler3911} from "./handler3911";
const app = express()
app.get('/3911', handler3911)
app.listen(3000, () => {})
        