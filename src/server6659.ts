
const express = require('express')
import {handler6659} from "./handler6659";
const app = express()
app.get('/6659', handler6659)
app.listen(3000, () => {})
        