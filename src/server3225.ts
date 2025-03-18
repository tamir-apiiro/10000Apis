
const express = require('express')
import {handler3225} from "./handler3225";
const app = express()
app.get('/3225', handler3225)
app.listen(3000, () => {})
        