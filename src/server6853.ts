
const express = require('express')
import {handler6853} from "./handler6853";
const app = express()
app.get('/6853', handler6853)
app.listen(3000, () => {})
        