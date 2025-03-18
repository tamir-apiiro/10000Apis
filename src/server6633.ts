
const express = require('express')
import {handler6633} from "./handler6633";
const app = express()
app.get('/6633', handler6633)
app.listen(3000, () => {})
        