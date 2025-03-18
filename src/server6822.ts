
const express = require('express')
import {handler6822} from "./handler6822";
const app = express()
app.get('/6822', handler6822)
app.listen(3000, () => {})
        