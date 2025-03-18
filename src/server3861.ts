
const express = require('express')
import {handler3861} from "./handler3861";
const app = express()
app.get('/3861', handler3861)
app.listen(3000, () => {})
        