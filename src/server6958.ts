
const express = require('express')
import {handler6958} from "./handler6958";
const app = express()
app.get('/6958', handler6958)
app.listen(3000, () => {})
        