
const express = require('express')
import {handler7772} from "./handler7772";
const app = express()
app.get('/7772', handler7772)
app.listen(3000, () => {})
        