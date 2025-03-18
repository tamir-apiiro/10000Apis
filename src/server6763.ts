
const express = require('express')
import {handler6763} from "./handler6763";
const app = express()
app.get('/6763', handler6763)
app.listen(3000, () => {})
        