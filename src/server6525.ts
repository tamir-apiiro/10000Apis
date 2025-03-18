
const express = require('express')
import {handler6525} from "./handler6525";
const app = express()
app.get('/6525', handler6525)
app.listen(3000, () => {})
        