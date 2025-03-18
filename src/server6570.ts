
const express = require('express')
import {handler6570} from "./handler6570";
const app = express()
app.get('/6570', handler6570)
app.listen(3000, () => {})
        