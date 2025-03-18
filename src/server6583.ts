
const express = require('express')
import {handler6583} from "./handler6583";
const app = express()
app.get('/6583', handler6583)
app.listen(3000, () => {})
        