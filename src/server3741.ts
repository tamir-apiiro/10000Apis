
const express = require('express')
import {handler3741} from "./handler3741";
const app = express()
app.get('/3741', handler3741)
app.listen(3000, () => {})
        