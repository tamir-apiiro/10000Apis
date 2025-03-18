
const express = require('express')
import {handler6998} from "./handler6998";
const app = express()
app.get('/6998', handler6998)
app.listen(3000, () => {})
        