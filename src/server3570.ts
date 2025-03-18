
const express = require('express')
import {handler3570} from "./handler3570";
const app = express()
app.get('/3570', handler3570)
app.listen(3000, () => {})
        