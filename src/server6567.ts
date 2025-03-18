
const express = require('express')
import {handler6567} from "./handler6567";
const app = express()
app.get('/6567', handler6567)
app.listen(3000, () => {})
        