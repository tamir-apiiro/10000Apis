
const express = require('express')
import {handler3071} from "./handler3071";
const app = express()
app.get('/3071', handler3071)
app.listen(3000, () => {})
        