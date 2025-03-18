
const express = require('express')
import {handler3288} from "./handler3288";
const app = express()
app.get('/3288', handler3288)
app.listen(3000, () => {})
        