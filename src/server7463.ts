
const express = require('express')
import {handler7463} from "./handler7463";
const app = express()
app.get('/7463', handler7463)
app.listen(3000, () => {})
        