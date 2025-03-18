
const express = require('express')
import {handler349} from "./handler349";
const app = express()
app.get('/349', handler349)
app.listen(3000, () => {})
        