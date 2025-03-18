
const express = require('express')
import {handler6067} from "./handler6067";
const app = express()
app.get('/6067', handler6067)
app.listen(3000, () => {})
        