
const express = require('express')
import {handler2780} from "./handler2780";
const app = express()
app.get('/2780', handler2780)
app.listen(3000, () => {})
        