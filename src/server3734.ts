
const express = require('express')
import {handler3734} from "./handler3734";
const app = express()
app.get('/3734', handler3734)
app.listen(3000, () => {})
        