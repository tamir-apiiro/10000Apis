
const express = require('express')
import {handler3520} from "./handler3520";
const app = express()
app.get('/3520', handler3520)
app.listen(3000, () => {})
        