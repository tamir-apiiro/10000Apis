
const express = require('express')
import {handler6337} from "./handler6337";
const app = express()
app.get('/6337', handler6337)
app.listen(3000, () => {})
        