
const express = require('express')
import {handler6348} from "./handler6348";
const app = express()
app.get('/6348', handler6348)
app.listen(3000, () => {})
        