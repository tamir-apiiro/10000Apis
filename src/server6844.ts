
const express = require('express')
import {handler6844} from "./handler6844";
const app = express()
app.get('/6844', handler6844)
app.listen(3000, () => {})
        