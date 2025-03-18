
const express = require('express')
import {handler3463} from "./handler3463";
const app = express()
app.get('/3463', handler3463)
app.listen(3000, () => {})
        