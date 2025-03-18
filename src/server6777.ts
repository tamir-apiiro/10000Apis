
const express = require('express')
import {handler6777} from "./handler6777";
const app = express()
app.get('/6777', handler6777)
app.listen(3000, () => {})
        