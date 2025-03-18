
const express = require('express')
import {handler3510} from "./handler3510";
const app = express()
app.get('/3510', handler3510)
app.listen(3000, () => {})
        