
const express = require('express')
import {handler3780} from "./handler3780";
const app = express()
app.get('/3780', handler3780)
app.listen(3000, () => {})
        