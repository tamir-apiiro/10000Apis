
const express = require('express')
import {handler6621} from "./handler6621";
const app = express()
app.get('/6621', handler6621)
app.listen(3000, () => {})
        