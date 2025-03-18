
const express = require('express')
import {handler530} from "./handler530";
const app = express()
app.get('/530', handler530)
app.listen(3000, () => {})
        