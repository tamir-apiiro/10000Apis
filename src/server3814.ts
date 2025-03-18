
const express = require('express')
import {handler3814} from "./handler3814";
const app = express()
app.get('/3814', handler3814)
app.listen(3000, () => {})
        