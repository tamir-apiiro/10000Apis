
const express = require('express')
import {handler3118} from "./handler3118";
const app = express()
app.get('/3118', handler3118)
app.listen(3000, () => {})
        