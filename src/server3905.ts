
const express = require('express')
import {handler3905} from "./handler3905";
const app = express()
app.get('/3905', handler3905)
app.listen(3000, () => {})
        