
const express = require('express')
import {handler6158} from "./handler6158";
const app = express()
app.get('/6158', handler6158)
app.listen(3000, () => {})
        