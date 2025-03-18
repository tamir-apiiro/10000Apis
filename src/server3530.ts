
const express = require('express')
import {handler3530} from "./handler3530";
const app = express()
app.get('/3530', handler3530)
app.listen(3000, () => {})
        