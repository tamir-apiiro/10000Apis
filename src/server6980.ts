
const express = require('express')
import {handler6980} from "./handler6980";
const app = express()
app.get('/6980', handler6980)
app.listen(3000, () => {})
        