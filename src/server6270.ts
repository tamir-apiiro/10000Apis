
const express = require('express')
import {handler6270} from "./handler6270";
const app = express()
app.get('/6270', handler6270)
app.listen(3000, () => {})
        