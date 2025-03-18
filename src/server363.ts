
const express = require('express')
import {handler363} from "./handler363";
const app = express()
app.get('/363', handler363)
app.listen(3000, () => {})
        