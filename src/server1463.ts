
const express = require('express')
import {handler1463} from "./handler1463";
const app = express()
app.get('/1463', handler1463)
app.listen(3000, () => {})
        