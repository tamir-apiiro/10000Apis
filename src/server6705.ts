
const express = require('express')
import {handler6705} from "./handler6705";
const app = express()
app.get('/6705', handler6705)
app.listen(3000, () => {})
        