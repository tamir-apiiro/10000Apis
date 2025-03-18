
const express = require('express')
import {handler6311} from "./handler6311";
const app = express()
app.get('/6311', handler6311)
app.listen(3000, () => {})
        