
const express = require('express')
import {handler3826} from "./handler3826";
const app = express()
app.get('/3826', handler3826)
app.listen(3000, () => {})
        