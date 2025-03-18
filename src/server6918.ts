
const express = require('express')
import {handler6918} from "./handler6918";
const app = express()
app.get('/6918', handler6918)
app.listen(3000, () => {})
        