
const express = require('express')
import {handler6986} from "./handler6986";
const app = express()
app.get('/6986', handler6986)
app.listen(3000, () => {})
        