
const express = require('express')
import {handler3866} from "./handler3866";
const app = express()
app.get('/3866', handler3866)
app.listen(3000, () => {})
        