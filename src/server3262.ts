
const express = require('express')
import {handler3262} from "./handler3262";
const app = express()
app.get('/3262', handler3262)
app.listen(3000, () => {})
        