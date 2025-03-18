
const express = require('express')
import {handler6981} from "./handler6981";
const app = express()
app.get('/6981', handler6981)
app.listen(3000, () => {})
        