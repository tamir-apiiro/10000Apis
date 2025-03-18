
const express = require('express')
import {handler6964} from "./handler6964";
const app = express()
app.get('/6964', handler6964)
app.listen(3000, () => {})
        