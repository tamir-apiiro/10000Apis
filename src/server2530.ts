
const express = require('express')
import {handler2530} from "./handler2530";
const app = express()
app.get('/2530', handler2530)
app.listen(3000, () => {})
        