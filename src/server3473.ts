
const express = require('express')
import {handler3473} from "./handler3473";
const app = express()
app.get('/3473', handler3473)
app.listen(3000, () => {})
        