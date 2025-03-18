
const express = require('express')
import {handler6052} from "./handler6052";
const app = express()
app.get('/6052', handler6052)
app.listen(3000, () => {})
        