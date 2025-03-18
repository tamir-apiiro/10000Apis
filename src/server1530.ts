
const express = require('express')
import {handler1530} from "./handler1530";
const app = express()
app.get('/1530', handler1530)
app.listen(3000, () => {})
        