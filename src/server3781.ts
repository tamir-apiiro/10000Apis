
const express = require('express')
import {handler3781} from "./handler3781";
const app = express()
app.get('/3781', handler3781)
app.listen(3000, () => {})
        