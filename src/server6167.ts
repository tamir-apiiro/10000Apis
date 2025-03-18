
const express = require('express')
import {handler6167} from "./handler6167";
const app = express()
app.get('/6167', handler6167)
app.listen(3000, () => {})
        