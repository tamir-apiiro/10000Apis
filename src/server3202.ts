
const express = require('express')
import {handler3202} from "./handler3202";
const app = express()
app.get('/3202', handler3202)
app.listen(3000, () => {})
        