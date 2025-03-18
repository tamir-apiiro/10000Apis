
const express = require('express')
import {handler3309} from "./handler3309";
const app = express()
app.get('/3309', handler3309)
app.listen(3000, () => {})
        