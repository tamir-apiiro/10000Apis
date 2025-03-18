
const express = require('express')
import {handler6121} from "./handler6121";
const app = express()
app.get('/6121', handler6121)
app.listen(3000, () => {})
        