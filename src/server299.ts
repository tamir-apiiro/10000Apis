
const express = require('express')
import {handler299} from "./handler299";
const app = express()
app.get('/299', handler299)
app.listen(3000, () => {})
        