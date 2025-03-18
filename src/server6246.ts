
const express = require('express')
import {handler6246} from "./handler6246";
const app = express()
app.get('/6246', handler6246)
app.listen(3000, () => {})
        