
const express = require('express')
import {handler6817} from "./handler6817";
const app = express()
app.get('/6817', handler6817)
app.listen(3000, () => {})
        