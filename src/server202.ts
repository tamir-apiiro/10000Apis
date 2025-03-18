
const express = require('express')
import {handler202} from "./handler202";
const app = express()
app.get('/202', handler202)
app.listen(3000, () => {})
        