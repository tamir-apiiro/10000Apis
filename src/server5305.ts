
const express = require('express')
import {handler5305} from "./handler5305";
const app = express()
app.get('/5305', handler5305)
app.listen(3000, () => {})
        