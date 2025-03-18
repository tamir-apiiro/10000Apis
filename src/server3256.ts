
const express = require('express')
import {handler3256} from "./handler3256";
const app = express()
app.get('/3256', handler3256)
app.listen(3000, () => {})
        