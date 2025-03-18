
const express = require('express')
import {handler3512} from "./handler3512";
const app = express()
app.get('/3512', handler3512)
app.listen(3000, () => {})
        