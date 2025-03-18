
const express = require('express')
import {handler6220} from "./handler6220";
const app = express()
app.get('/6220', handler6220)
app.listen(3000, () => {})
        