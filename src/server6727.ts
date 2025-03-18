
const express = require('express')
import {handler6727} from "./handler6727";
const app = express()
app.get('/6727', handler6727)
app.listen(3000, () => {})
        