
const express = require('express')
import {handler3168} from "./handler3168";
const app = express()
app.get('/3168', handler3168)
app.listen(3000, () => {})
        