
const express = require('express')
import {handler8780} from "./handler8780";
const app = express()
app.get('/8780', handler8780)
app.listen(3000, () => {})
        