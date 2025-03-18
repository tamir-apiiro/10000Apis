
const express = require('express')
import {handler3023} from "./handler3023";
const app = express()
app.get('/3023', handler3023)
app.listen(3000, () => {})
        