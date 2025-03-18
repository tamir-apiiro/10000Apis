
const express = require('express')
import {handler6472} from "./handler6472";
const app = express()
app.get('/6472', handler6472)
app.listen(3000, () => {})
        