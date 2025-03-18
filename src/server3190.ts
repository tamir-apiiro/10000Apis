
const express = require('express')
import {handler3190} from "./handler3190";
const app = express()
app.get('/3190', handler3190)
app.listen(3000, () => {})
        