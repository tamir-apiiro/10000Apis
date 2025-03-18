
const express = require('express')
import {handler6573} from "./handler6573";
const app = express()
app.get('/6573', handler6573)
app.listen(3000, () => {})
        