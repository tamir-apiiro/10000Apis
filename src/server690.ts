
const express = require('express')
import {handler690} from "./handler690";
const app = express()
app.get('/690', handler690)
app.listen(3000, () => {})
        