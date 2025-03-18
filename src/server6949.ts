
const express = require('express')
import {handler6949} from "./handler6949";
const app = express()
app.get('/6949', handler6949)
app.listen(3000, () => {})
        