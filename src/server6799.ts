
const express = require('express')
import {handler6799} from "./handler6799";
const app = express()
app.get('/6799', handler6799)
app.listen(3000, () => {})
        