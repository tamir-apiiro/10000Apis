
const express = require('express')
import {handler3918} from "./handler3918";
const app = express()
app.get('/3918', handler3918)
app.listen(3000, () => {})
        