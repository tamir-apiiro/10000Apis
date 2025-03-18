
const express = require('express')
import {handler6797} from "./handler6797";
const app = express()
app.get('/6797', handler6797)
app.listen(3000, () => {})
        