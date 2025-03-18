
const express = require('express')
import {handler6372} from "./handler6372";
const app = express()
app.get('/6372', handler6372)
app.listen(3000, () => {})
        