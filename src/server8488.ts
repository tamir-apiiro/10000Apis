
const express = require('express')
import {handler8488} from "./handler8488";
const app = express()
app.get('/8488', handler8488)
app.listen(3000, () => {})
        