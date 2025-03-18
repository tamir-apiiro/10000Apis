
const express = require('express')
import {handler112} from "./handler112";
const app = express()
app.get('/112', handler112)
app.listen(3000, () => {})
        