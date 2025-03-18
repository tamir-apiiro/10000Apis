
const express = require('express')
import {handler3086} from "./handler3086";
const app = express()
app.get('/3086', handler3086)
app.listen(3000, () => {})
        