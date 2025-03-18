
const express = require('express')
import {handler6168} from "./handler6168";
const app = express()
app.get('/6168', handler6168)
app.listen(3000, () => {})
        