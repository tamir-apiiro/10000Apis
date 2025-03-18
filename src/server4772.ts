
const express = require('express')
import {handler4772} from "./handler4772";
const app = express()
app.get('/4772', handler4772)
app.listen(3000, () => {})
        