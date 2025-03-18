
const express = require('express')
import {handler6316} from "./handler6316";
const app = express()
app.get('/6316', handler6316)
app.listen(3000, () => {})
        