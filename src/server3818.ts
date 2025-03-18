
const express = require('express')
import {handler3818} from "./handler3818";
const app = express()
app.get('/3818', handler3818)
app.listen(3000, () => {})
        