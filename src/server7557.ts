
const express = require('express')
import {handler7557} from "./handler7557";
const app = express()
app.get('/7557', handler7557)
app.listen(3000, () => {})
        