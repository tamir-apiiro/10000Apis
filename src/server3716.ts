
const express = require('express')
import {handler3716} from "./handler3716";
const app = express()
app.get('/3716', handler3716)
app.listen(3000, () => {})
        