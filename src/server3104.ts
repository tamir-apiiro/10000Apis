
const express = require('express')
import {handler3104} from "./handler3104";
const app = express()
app.get('/3104', handler3104)
app.listen(3000, () => {})
        