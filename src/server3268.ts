
const express = require('express')
import {handler3268} from "./handler3268";
const app = express()
app.get('/3268', handler3268)
app.listen(3000, () => {})
        