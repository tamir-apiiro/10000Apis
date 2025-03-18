
const express = require('express')
import {handler621} from "./handler621";
const app = express()
app.get('/621', handler621)
app.listen(3000, () => {})
        