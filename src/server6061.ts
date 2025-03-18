
const express = require('express')
import {handler6061} from "./handler6061";
const app = express()
app.get('/6061', handler6061)
app.listen(3000, () => {})
        