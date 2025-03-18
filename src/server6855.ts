
const express = require('express')
import {handler6855} from "./handler6855";
const app = express()
app.get('/6855', handler6855)
app.listen(3000, () => {})
        