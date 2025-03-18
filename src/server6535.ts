
const express = require('express')
import {handler6535} from "./handler6535";
const app = express()
app.get('/6535', handler6535)
app.listen(3000, () => {})
        