
const express = require('express')
import {handler1772} from "./handler1772";
const app = express()
app.get('/1772', handler1772)
app.listen(3000, () => {})
        