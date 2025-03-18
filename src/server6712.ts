
const express = require('express')
import {handler6712} from "./handler6712";
const app = express()
app.get('/6712', handler6712)
app.listen(3000, () => {})
        