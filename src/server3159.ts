
const express = require('express')
import {handler3159} from "./handler3159";
const app = express()
app.get('/3159', handler3159)
app.listen(3000, () => {})
        