
const express = require('express')
import {handler6888} from "./handler6888";
const app = express()
app.get('/6888', handler6888)
app.listen(3000, () => {})
        