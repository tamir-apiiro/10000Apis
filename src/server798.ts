
const express = require('express')
import {handler798} from "./handler798";
const app = express()
app.get('/798', handler798)
app.listen(3000, () => {})
        