
const express = require('express')
import {handler4070} from "./handler4070";
const app = express()
app.get('/4070', handler4070)
app.listen(3000, () => {})
        