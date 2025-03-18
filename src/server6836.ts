
const express = require('express')
import {handler6836} from "./handler6836";
const app = express()
app.get('/6836', handler6836)
app.listen(3000, () => {})
        