
const express = require('express')
import {handler6810} from "./handler6810";
const app = express()
app.get('/6810', handler6810)
app.listen(3000, () => {})
        