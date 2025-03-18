
const express = require('express')
import {handler6122} from "./handler6122";
const app = express()
app.get('/6122', handler6122)
app.listen(3000, () => {})
        