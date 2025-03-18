
const express = require('express')
import {handler6100} from "./handler6100";
const app = express()
app.get('/6100', handler6100)
app.listen(3000, () => {})
        