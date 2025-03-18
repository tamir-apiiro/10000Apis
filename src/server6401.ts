
const express = require('express')
import {handler6401} from "./handler6401";
const app = express()
app.get('/6401', handler6401)
app.listen(3000, () => {})
        