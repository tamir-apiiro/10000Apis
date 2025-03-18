
const express = require('express')
import {handler4780} from "./handler4780";
const app = express()
app.get('/4780', handler4780)
app.listen(3000, () => {})
        