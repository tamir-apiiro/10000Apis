
const express = require('express')
import {handler6274} from "./handler6274";
const app = express()
app.get('/6274', handler6274)
app.listen(3000, () => {})
        