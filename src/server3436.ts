
const express = require('express')
import {handler3436} from "./handler3436";
const app = express()
app.get('/3436', handler3436)
app.listen(3000, () => {})
        