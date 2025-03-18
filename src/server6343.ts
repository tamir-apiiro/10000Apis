
const express = require('express')
import {handler6343} from "./handler6343";
const app = express()
app.get('/6343', handler6343)
app.listen(3000, () => {})
        