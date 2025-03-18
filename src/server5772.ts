
const express = require('express')
import {handler5772} from "./handler5772";
const app = express()
app.get('/5772', handler5772)
app.listen(3000, () => {})
        