
const express = require('express')
import {handler7737} from "./handler7737";
const app = express()
app.get('/7737', handler7737)
app.listen(3000, () => {})
        