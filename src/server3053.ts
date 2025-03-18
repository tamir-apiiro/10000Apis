
const express = require('express')
import {handler3053} from "./handler3053";
const app = express()
app.get('/3053', handler3053)
app.listen(3000, () => {})
        