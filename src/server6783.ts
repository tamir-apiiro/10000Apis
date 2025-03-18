
const express = require('express')
import {handler6783} from "./handler6783";
const app = express()
app.get('/6783', handler6783)
app.listen(3000, () => {})
        