
const express = require('express')
import {handler3001} from "./handler3001";
const app = express()
app.get('/3001', handler3001)
app.listen(3000, () => {})
        