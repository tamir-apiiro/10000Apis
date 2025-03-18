
const express = require('express')
import {handler6325} from "./handler6325";
const app = express()
app.get('/6325', handler6325)
app.listen(3000, () => {})
        