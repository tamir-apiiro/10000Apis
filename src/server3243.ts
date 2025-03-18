
const express = require('express')
import {handler3243} from "./handler3243";
const app = express()
app.get('/3243', handler3243)
app.listen(3000, () => {})
        