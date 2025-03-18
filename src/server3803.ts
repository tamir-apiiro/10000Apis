
const express = require('express')
import {handler3803} from "./handler3803";
const app = express()
app.get('/3803', handler3803)
app.listen(3000, () => {})
        