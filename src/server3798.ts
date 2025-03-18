
const express = require('express')
import {handler3798} from "./handler3798";
const app = express()
app.get('/3798', handler3798)
app.listen(3000, () => {})
        