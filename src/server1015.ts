
const express = require('express')
import {handler1015} from "./handler1015";
const app = express()
app.get('/1015', handler1015)
app.listen(3000, () => {})
        