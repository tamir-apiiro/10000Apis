
const express = require('express')
import {handler3571} from "./handler3571";
const app = express()
app.get('/3571', handler3571)
app.listen(3000, () => {})
        