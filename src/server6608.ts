
const express = require('express')
import {handler6608} from "./handler6608";
const app = express()
app.get('/6608', handler6608)
app.listen(3000, () => {})
        