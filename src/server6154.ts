
const express = require('express')
import {handler6154} from "./handler6154";
const app = express()
app.get('/6154', handler6154)
app.listen(3000, () => {})
        