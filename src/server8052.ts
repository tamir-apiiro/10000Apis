
const express = require('express')
import {handler8052} from "./handler8052";
const app = express()
app.get('/8052', handler8052)
app.listen(3000, () => {})
        