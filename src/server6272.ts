
const express = require('express')
import {handler6272} from "./handler6272";
const app = express()
app.get('/6272', handler6272)
app.listen(3000, () => {})
        