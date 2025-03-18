
const express = require('express')
import {handler3311} from "./handler3311";
const app = express()
app.get('/3311', handler3311)
app.listen(3000, () => {})
        