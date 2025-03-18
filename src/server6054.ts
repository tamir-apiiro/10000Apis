
const express = require('express')
import {handler6054} from "./handler6054";
const app = express()
app.get('/6054', handler6054)
app.listen(3000, () => {})
        