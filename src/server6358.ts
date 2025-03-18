
const express = require('express')
import {handler6358} from "./handler6358";
const app = express()
app.get('/6358', handler6358)
app.listen(3000, () => {})
        