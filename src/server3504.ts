
const express = require('express')
import {handler3504} from "./handler3504";
const app = express()
app.get('/3504', handler3504)
app.listen(3000, () => {})
        