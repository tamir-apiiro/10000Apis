
const express = require('express')
import {handler6110} from "./handler6110";
const app = express()
app.get('/6110', handler6110)
app.listen(3000, () => {})
        