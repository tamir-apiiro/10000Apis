
const express = require('express')
import {handler926} from "./handler926";
const app = express()
app.get('/926', handler926)
app.listen(3000, () => {})
        