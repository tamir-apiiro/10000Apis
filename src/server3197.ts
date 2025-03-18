
const express = require('express')
import {handler3197} from "./handler3197";
const app = express()
app.get('/3197', handler3197)
app.listen(3000, () => {})
        