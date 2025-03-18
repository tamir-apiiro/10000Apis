
const express = require('express')
import {handler6872} from "./handler6872";
const app = express()
app.get('/6872', handler6872)
app.listen(3000, () => {})
        