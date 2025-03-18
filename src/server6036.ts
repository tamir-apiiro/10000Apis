
const express = require('express')
import {handler6036} from "./handler6036";
const app = express()
app.get('/6036', handler6036)
app.listen(3000, () => {})
        