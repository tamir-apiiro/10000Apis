
const express = require('express')
import {handler3951} from "./handler3951";
const app = express()
app.get('/3951', handler3951)
app.listen(3000, () => {})
        