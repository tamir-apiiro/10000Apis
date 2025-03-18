
const express = require('express')
import {handler6364} from "./handler6364";
const app = express()
app.get('/6364', handler6364)
app.listen(3000, () => {})
        