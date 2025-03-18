
const express = require('express')
import {handler6675} from "./handler6675";
const app = express()
app.get('/6675', handler6675)
app.listen(3000, () => {})
        