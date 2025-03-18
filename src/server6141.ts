
const express = require('express')
import {handler6141} from "./handler6141";
const app = express()
app.get('/6141', handler6141)
app.listen(3000, () => {})
        