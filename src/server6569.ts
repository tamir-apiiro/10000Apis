
const express = require('express')
import {handler6569} from "./handler6569";
const app = express()
app.get('/6569', handler6569)
app.listen(3000, () => {})
        