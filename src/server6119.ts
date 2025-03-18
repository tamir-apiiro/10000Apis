
const express = require('express')
import {handler6119} from "./handler6119";
const app = express()
app.get('/6119', handler6119)
app.listen(3000, () => {})
        