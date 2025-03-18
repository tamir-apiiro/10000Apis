
const express = require('express')
import {handler6854} from "./handler6854";
const app = express()
app.get('/6854', handler6854)
app.listen(3000, () => {})
        