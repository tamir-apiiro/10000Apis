
const express = require('express')
import {handler3593} from "./handler3593";
const app = express()
app.get('/3593', handler3593)
app.listen(3000, () => {})
        