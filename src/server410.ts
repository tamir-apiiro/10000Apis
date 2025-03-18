
const express = require('express')
import {handler410} from "./handler410";
const app = express()
app.get('/410', handler410)
app.listen(3000, () => {})
        