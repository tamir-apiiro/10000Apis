
const express = require('express')
import {handler6927} from "./handler6927";
const app = express()
app.get('/6927', handler6927)
app.listen(3000, () => {})
        