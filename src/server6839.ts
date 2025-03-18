
const express = require('express')
import {handler6839} from "./handler6839";
const app = express()
app.get('/6839', handler6839)
app.listen(3000, () => {})
        