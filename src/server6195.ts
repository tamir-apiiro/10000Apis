
const express = require('express')
import {handler6195} from "./handler6195";
const app = express()
app.get('/6195', handler6195)
app.listen(3000, () => {})
        