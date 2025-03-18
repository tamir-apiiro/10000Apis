
const express = require('express')
import {handler3703} from "./handler3703";
const app = express()
app.get('/3703', handler3703)
app.listen(3000, () => {})
        