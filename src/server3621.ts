
const express = require('express')
import {handler3621} from "./handler3621";
const app = express()
app.get('/3621', handler3621)
app.listen(3000, () => {})
        