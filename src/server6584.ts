
const express = require('express')
import {handler6584} from "./handler6584";
const app = express()
app.get('/6584', handler6584)
app.listen(3000, () => {})
        