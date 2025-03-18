
const express = require('express')
import {handler3237} from "./handler3237";
const app = express()
app.get('/3237', handler3237)
app.listen(3000, () => {})
        