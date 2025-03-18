
const express = require('express')
import {handler2772} from "./handler2772";
const app = express()
app.get('/2772', handler2772)
app.listen(3000, () => {})
        