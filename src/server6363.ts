
const express = require('express')
import {handler6363} from "./handler6363";
const app = express()
app.get('/6363', handler6363)
app.listen(3000, () => {})
        