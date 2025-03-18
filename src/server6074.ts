
const express = require('express')
import {handler6074} from "./handler6074";
const app = express()
app.get('/6074', handler6074)
app.listen(3000, () => {})
        