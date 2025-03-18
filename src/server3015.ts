
const express = require('express')
import {handler3015} from "./handler3015";
const app = express()
app.get('/3015', handler3015)
app.listen(3000, () => {})
        