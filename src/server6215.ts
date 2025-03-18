
const express = require('express')
import {handler6215} from "./handler6215";
const app = express()
app.get('/6215', handler6215)
app.listen(3000, () => {})
        