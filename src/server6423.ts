
const express = require('express')
import {handler6423} from "./handler6423";
const app = express()
app.get('/6423', handler6423)
app.listen(3000, () => {})
        