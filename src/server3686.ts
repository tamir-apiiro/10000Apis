
const express = require('express')
import {handler3686} from "./handler3686";
const app = express()
app.get('/3686', handler3686)
app.listen(3000, () => {})
        