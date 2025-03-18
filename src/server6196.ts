
const express = require('express')
import {handler6196} from "./handler6196";
const app = express()
app.get('/6196', handler6196)
app.listen(3000, () => {})
        