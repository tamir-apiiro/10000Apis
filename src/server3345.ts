
const express = require('express')
import {handler3345} from "./handler3345";
const app = express()
app.get('/3345', handler3345)
app.listen(3000, () => {})
        