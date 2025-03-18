
const express = require('express')
import {handler6182} from "./handler6182";
const app = express()
app.get('/6182', handler6182)
app.listen(3000, () => {})
        