
const express = require('express')
import {handler707} from "./handler707";
const app = express()
app.get('/707', handler707)
app.listen(3000, () => {})
        