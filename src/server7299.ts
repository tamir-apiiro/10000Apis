
const express = require('express')
import {handler7299} from "./handler7299";
const app = express()
app.get('/7299', handler7299)
app.listen(3000, () => {})
        