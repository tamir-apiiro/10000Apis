
const express = require('express')
import {handler846} from "./handler846";
const app = express()
app.get('/846', handler846)
app.listen(3000, () => {})
        