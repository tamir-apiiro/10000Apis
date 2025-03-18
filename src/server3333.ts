
const express = require('express')
import {handler3333} from "./handler3333";
const app = express()
app.get('/3333', handler3333)
app.listen(3000, () => {})
        