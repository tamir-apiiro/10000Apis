
const express = require('express')
import {handler6410} from "./handler6410";
const app = express()
app.get('/6410', handler6410)
app.listen(3000, () => {})
        