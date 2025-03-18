
const express = require('express')
import {handler8101} from "./handler8101";
const app = express()
app.get('/8101', handler8101)
app.listen(3000, () => {})
        