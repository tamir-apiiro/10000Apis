
const express = require('express')
import {handler6466} from "./handler6466";
const app = express()
app.get('/6466', handler6466)
app.listen(3000, () => {})
        