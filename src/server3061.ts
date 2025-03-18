
const express = require('express')
import {handler3061} from "./handler3061";
const app = express()
app.get('/3061', handler3061)
app.listen(3000, () => {})
        