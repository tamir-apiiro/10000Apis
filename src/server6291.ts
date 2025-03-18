
const express = require('express')
import {handler6291} from "./handler6291";
const app = express()
app.get('/6291', handler6291)
app.listen(3000, () => {})
        