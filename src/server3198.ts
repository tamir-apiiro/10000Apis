
const express = require('express')
import {handler3198} from "./handler3198";
const app = express()
app.get('/3198', handler3198)
app.listen(3000, () => {})
        