
const express = require('express')
import {handler6039} from "./handler6039";
const app = express()
app.get('/6039', handler6039)
app.listen(3000, () => {})
        