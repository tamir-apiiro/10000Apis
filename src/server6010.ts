
const express = require('express')
import {handler6010} from "./handler6010";
const app = express()
app.get('/6010', handler6010)
app.listen(3000, () => {})
        