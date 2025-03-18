
const express = require('express')
import {handler6339} from "./handler6339";
const app = express()
app.get('/6339', handler6339)
app.listen(3000, () => {})
        