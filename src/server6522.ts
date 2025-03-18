
const express = require('express')
import {handler6522} from "./handler6522";
const app = express()
app.get('/6522', handler6522)
app.listen(3000, () => {})
        