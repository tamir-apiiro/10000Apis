
const express = require('express')
import {handler297} from "./handler297";
const app = express()
app.get('/297', handler297)
app.listen(3000, () => {})
        