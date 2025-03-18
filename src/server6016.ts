
const express = require('express')
import {handler6016} from "./handler6016";
const app = express()
app.get('/6016', handler6016)
app.listen(3000, () => {})
        