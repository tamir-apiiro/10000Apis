
const express = require('express')
import {handler3148} from "./handler3148";
const app = express()
app.get('/3148', handler3148)
app.listen(3000, () => {})
        