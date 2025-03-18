
const express = require('express')
import {handler3308} from "./handler3308";
const app = express()
app.get('/3308', handler3308)
app.listen(3000, () => {})
        