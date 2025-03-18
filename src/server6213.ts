
const express = require('express')
import {handler6213} from "./handler6213";
const app = express()
app.get('/6213', handler6213)
app.listen(3000, () => {})
        