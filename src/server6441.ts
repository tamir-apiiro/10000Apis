
const express = require('express')
import {handler6441} from "./handler6441";
const app = express()
app.get('/6441', handler6441)
app.listen(3000, () => {})
        