
const express = require('express')
import {handler6022} from "./handler6022";
const app = express()
app.get('/6022', handler6022)
app.listen(3000, () => {})
        