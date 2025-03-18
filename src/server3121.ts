
const express = require('express')
import {handler3121} from "./handler3121";
const app = express()
app.get('/3121', handler3121)
app.listen(3000, () => {})
        