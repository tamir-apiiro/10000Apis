
const express = require('express')
import {handler6360} from "./handler6360";
const app = express()
app.get('/6360', handler6360)
app.listen(3000, () => {})
        