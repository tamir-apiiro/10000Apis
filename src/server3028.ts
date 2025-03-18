
const express = require('express')
import {handler3028} from "./handler3028";
const app = express()
app.get('/3028', handler3028)
app.listen(3000, () => {})
        