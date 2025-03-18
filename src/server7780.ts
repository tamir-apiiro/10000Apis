
const express = require('express')
import {handler7780} from "./handler7780";
const app = express()
app.get('/7780', handler7780)
app.listen(3000, () => {})
        