
const express = require('express')
import {handler6767} from "./handler6767";
const app = express()
app.get('/6767', handler6767)
app.listen(3000, () => {})
        