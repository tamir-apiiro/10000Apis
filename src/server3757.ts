
const express = require('express')
import {handler3757} from "./handler3757";
const app = express()
app.get('/3757', handler3757)
app.listen(3000, () => {})
        