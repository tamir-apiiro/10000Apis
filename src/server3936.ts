
const express = require('express')
import {handler3936} from "./handler3936";
const app = express()
app.get('/3936', handler3936)
app.listen(3000, () => {})
        