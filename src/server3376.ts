
const express = require('express')
import {handler3376} from "./handler3376";
const app = express()
app.get('/3376', handler3376)
app.listen(3000, () => {})
        