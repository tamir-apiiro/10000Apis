
const express = require('express')
import {handler6578} from "./handler6578";
const app = express()
app.get('/6578', handler6578)
app.listen(3000, () => {})
        