
const express = require('express')
import {handler1339} from "./handler1339";
const app = express()
app.get('/1339', handler1339)
app.listen(3000, () => {})
        