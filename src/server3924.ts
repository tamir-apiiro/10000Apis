
const express = require('express')
import {handler3924} from "./handler3924";
const app = express()
app.get('/3924', handler3924)
app.listen(3000, () => {})
        