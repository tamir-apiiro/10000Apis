
const express = require('express')
import {handler3694} from "./handler3694";
const app = express()
app.get('/3694', handler3694)
app.listen(3000, () => {})
        