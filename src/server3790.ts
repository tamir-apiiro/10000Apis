
const express = require('express')
import {handler3790} from "./handler3790";
const app = express()
app.get('/3790', handler3790)
app.listen(3000, () => {})
        