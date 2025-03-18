
const express = require('express')
import {handler6202} from "./handler6202";
const app = express()
app.get('/6202', handler6202)
app.listen(3000, () => {})
        