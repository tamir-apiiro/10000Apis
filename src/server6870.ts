
const express = require('express')
import {handler6870} from "./handler6870";
const app = express()
app.get('/6870', handler6870)
app.listen(3000, () => {})
        