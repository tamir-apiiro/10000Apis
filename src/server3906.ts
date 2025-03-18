
const express = require('express')
import {handler3906} from "./handler3906";
const app = express()
app.get('/3906', handler3906)
app.listen(3000, () => {})
        