
const express = require('express')
import {handler3265} from "./handler3265";
const app = express()
app.get('/3265', handler3265)
app.listen(3000, () => {})
        