
const express = require('express')
import {handler3364} from "./handler3364";
const app = express()
app.get('/3364', handler3364)
app.listen(3000, () => {})
        