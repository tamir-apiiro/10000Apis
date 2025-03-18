
const express = require('express')
import {handler6355} from "./handler6355";
const app = express()
app.get('/6355', handler6355)
app.listen(3000, () => {})
        