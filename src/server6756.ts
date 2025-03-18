
const express = require('express')
import {handler6756} from "./handler6756";
const app = express()
app.get('/6756', handler6756)
app.listen(3000, () => {})
        