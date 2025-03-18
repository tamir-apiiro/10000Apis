
const express = require('express')
import {handler6218} from "./handler6218";
const app = express()
app.get('/6218', handler6218)
app.listen(3000, () => {})
        