
const express = require('express')
import {handler6469} from "./handler6469";
const app = express()
app.get('/6469', handler6469)
app.listen(3000, () => {})
        