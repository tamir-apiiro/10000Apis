
const express = require('express')
import {handler3953} from "./handler3953";
const app = express()
app.get('/3953', handler3953)
app.listen(3000, () => {})
        