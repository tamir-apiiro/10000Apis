
const express = require('express')
import {handler3174} from "./handler3174";
const app = express()
app.get('/3174', handler3174)
app.listen(3000, () => {})
        