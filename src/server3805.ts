
const express = require('express')
import {handler3805} from "./handler3805";
const app = express()
app.get('/3805', handler3805)
app.listen(3000, () => {})
        