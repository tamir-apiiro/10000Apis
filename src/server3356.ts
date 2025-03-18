
const express = require('express')
import {handler3356} from "./handler3356";
const app = express()
app.get('/3356', handler3356)
app.listen(3000, () => {})
        