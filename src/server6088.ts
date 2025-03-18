
const express = require('express')
import {handler6088} from "./handler6088";
const app = express()
app.get('/6088', handler6088)
app.listen(3000, () => {})
        