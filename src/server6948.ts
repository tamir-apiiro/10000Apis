
const express = require('express')
import {handler6948} from "./handler6948";
const app = express()
app.get('/6948', handler6948)
app.listen(3000, () => {})
        